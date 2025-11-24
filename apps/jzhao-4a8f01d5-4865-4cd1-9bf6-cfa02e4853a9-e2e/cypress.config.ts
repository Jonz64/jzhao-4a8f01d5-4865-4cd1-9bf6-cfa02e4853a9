import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run jzhao-4a8f01d5-4865-4cd1-9bf6-cfa02e4853a9:serve',
        production:
          'npx nx run jzhao-4a8f01d5-4865-4cd1-9bf6-cfa02e4853a9:serve-static',
      },
      ciWebServerCommand:
        'npx nx run jzhao-4a8f01d5-4865-4cd1-9bf6-cfa02e4853a9:serve-static',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
