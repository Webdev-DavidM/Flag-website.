import Flag from '@/components/Flag/Flag';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import data from '@/data.json';

export default function HomePage() {
  return (
    <>
      <h1>test</h1>
      <Flag flag={data[22]} />
      <ColorSchemeToggle />
    </>
  );
}
