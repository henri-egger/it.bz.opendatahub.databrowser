/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv
  extends Readonly<Record<string, string | boolean | undefined>> {
  readonly VITE_APP_KEYCLOAK_URL: string;
  readonly VITE_APP_KEYCLOAK_REALM: string;
  readonly VITE_APP_KEYCLOAK_CLIENT_ID: string;
  readonly VITE_APP_KEYCLOAK_REDIRECT_URI: string;
  readonly VITE_APP_IMAGE_UPLOAD_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
