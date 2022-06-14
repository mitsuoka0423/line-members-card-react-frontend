import { Card } from '../card';
// TODO: カッコよくhooksにしたい
// import { useProfile } from './hooks';
import { useBarcode } from './hooks';

function Page() {
  const { barcodeId } = useBarcode();

  return (
    <div className="App">
      {barcodeId ? (
        <Box>
          <Card value={barcodeId} type="qrcode"></Card>
        </Box>
      ) : (
        '読込中'
      )}
    </div>
  );
}

export default Page;
