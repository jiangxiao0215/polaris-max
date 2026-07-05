import React from 'react';
import { defaultOption } from './Setting';

export default function Component({ option = defaultOption, style }: { option?: Record<string, any>; style?: React.CSSProperties }) {
  return (
    <section className="component-card" style={style}>
      <span className="badge">Polaris Max V2</span>
      <h1 style={{ color: option.accentColor || defaultOption.accentColor }}>{option.title || defaultOption.title}</h1>
      <p>{option.description || defaultOption.description}</p>
      <button type="button">查看详情</button>
    </section>
  );
}
