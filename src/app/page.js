import Image from "next/image";
import styles from "./page.module.css";
import Footer from '../components/Footer/Footer';
import Section1 from '../components/Main/section1/section1';
import HelpUkraine from '../components/Main/helpUkraine/helpUkraine';
import SupportAction from '../components/Main/SupportAction/support';
import Header from '../components/Header/Header';
import News  from '../components/Main/news/news';
import ExtraHelp from '../components/Main/extraHelp/extraHelp';

export default function Home() {
  return (
    <>
    <Section1 />
    <HelpUkraine />
    <ExtraHelp />
    <SupportAction />
    <News />
    </>
  );
}
