import Awards from "./component/Awards";
import { BtmFooter } from "./component/Footer";
import { HR } from "./component/HR";
import Landing from "./component/Landing";
import { Management } from "./component/Management";
import { Network } from "./component/Network";
import { Products } from './component/Products';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-light-cream xl:px-16 lg:px-12 md:px-8 sm:px-4">
      <Landing></Landing>
      <HR></HR>
      <Products></Products>
      <HR></HR>
      <Network></Network>
      <HR></HR>
      <Awards></Awards>
      <HR></HR>
      <Management></Management>
      <BtmFooter></BtmFooter>
    </main>
  );
}
