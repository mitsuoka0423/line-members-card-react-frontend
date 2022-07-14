/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LIFF_ID: string;
  readonly VITE_LIFF_MOCK_MODE: 'true' | 'false';
  readonly VITE_LIFF_REDIRECT_URI: string;
  readonly VITE_LIFF_API_ENDPOINT: string;
  readonly VITE_LIFF_CODE_TYPE: 'barcode' | 'qrcode';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
