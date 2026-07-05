import React from 'react';

export const defaultOption = {
  accentColor: '#2563eb',
  description: '发布后会生成 @polaris-max/comp_polaris_max_demo npm 包。',
  title: 'Polaris Max 示例组件'
};

export function Setting({ option = {}, onPatch }: { option?: Record<string, any>; onPatch: (patch: Record<string, any>) => void }) {
  return (
    <div style={{ display: 'grid', gap: 10 }}>
      <label style={{ display: 'grid', gap: 4, fontSize: 12 }}>
        标题
        <input
          style={{ height: 30, padding: '0 8px' }}
          value={String(option.title || '')}
          onChange={event => onPatch({ title: event.target.value })}
        />
      </label>
      <label style={{ display: 'grid', gap: 4, fontSize: 12 }}>
        描述
        <textarea
          rows={3}
          style={{ padding: '6px 8px' }}
          value={String(option.description || '')}
          onChange={event => onPatch({ description: event.target.value })}
        />
      </label>
      <label style={{ display: 'grid', gap: 4, fontSize: 12 }}>
        强调色
        <input
          type="color"
          value={String(option.accentColor || '#2563eb')}
          onChange={event => onPatch({ accentColor: event.target.value })}
        />
      </label>
    </div>
  );
}
