import { Block, Layout, LinkIcon } from "components";
import { Routes } from "Router";

import style from './Main.module.scss';

export function Main() {
  return (
    <Layout>
      <div className={style.root}>
        <Block
          className={style.block}
        >
          <h2>Passwords</h2>
          <LinkIcon to={Routes.PASSWORDS} />
        </Block>
        <Block
          className={style.block}
        >
          <h2>Generate Password</h2>
          <LinkIcon to={Routes.GENERATOR} />
        </Block>
      </div>
    </Layout>
  );
}
