import './App.css'

import {
  LdButton,
  LdMenuitem,
  LdContextMenu
} from "@emdgroup-liquid/liquid/dist/react";

export default function App() {
  const onClick = (ev, id) => {
    console.info('click', id, ev)
  }
  return (
    <>
      <LdContextMenu>
        <LdButton slot="trigger">Open menu</LdButton>
        <LdMenuitem onClick={(ev) => onClick(ev, 1)}>Menu item 1</LdMenuitem>
        <LdMenuitem onClick={(ev) => onClick(ev, 2)}>Menu item 2</LdMenuitem>
        <LdMenuitem onClick={(ev) => onClick(ev, 3)}>Menu item 3</LdMenuitem>
        <LdMenuitem>
          <LdButton onClick={(ev) => onClick(ev, 4)}>Menu button 4</LdButton>
        </LdMenuitem>
      </LdContextMenu>
    </>
  );
}
