import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { join } from 'path';
import { RouterModule, Routes } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { config } from './database/datasource';
import { TypeOrmModule } from '@nestjs/typeorm';

const FRONTEND_PATH = join(__dirname, '..', '..', 'frontend', 'dist');

const routes: Routes = [
  {
    path: 'api',
    children: [
      {
        path: 'health',
        module: HealthModule,
      },
    ],
  },
];

const getModulesFromRoutes = (routes: Routes) => {
  const modules: unknown[] = [];
  for (const route of routes) {
    if (route.module) {
      modules.push(route.module);
    }
    if (route.children) {
      modules.push(...getModulesFromRoutes(route.children as Routes));
    }
  }
  return modules;
};

const modules = getModulesFromRoutes(routes);

@Module({
  imports: [
    RouterModule.register(routes),
    TypeOrmModule.forRootAsync({
      useFactory: () => config,
    }),
    HealthModule,
    ...(modules as any),
    ServeStaticModule.forRoot({
      rootPath: FRONTEND_PATH,
      exclude: ['/api*'], // Return 404 for non-existent API routes
      serveStaticOptions: {
        maxAge: 2 * 60 * 60 * 1000, // 2 hours, same as cloudflare
        setHeaders: function (res, path) {
          // set maxAge to 0 for root index.html
          if (path === join(FRONTEND_PATH, 'index.html')) {
            res.setHeader('Cache-control', 'public, max-age=0');
          }
        },
      },
    }),
  ],
})
export class AppModule {}
