import Image from "next/image";
import styles from "./page.module.css";
import Footer from '../components/Footer/Footer';
// import Section1 from '../components/Main/section1';
import HelpUkraine from '../components/Main/helpUkraine/helpUkraine';
import SupportAction from '../components/Main/SupportAction/support';

export default function Home() {
  return (
    <>
    <SupportAction />
    <HelpUkraine />
    <Footer /></>
  );
}
