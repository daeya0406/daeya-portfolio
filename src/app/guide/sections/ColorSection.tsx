'use client';
import colors from 'tailwindcss/colors';
import { toast } from 'sonner';
import ColorChip from '@/components/guide/ColorChip';
import { Heading } from '@/components/common/Heading';

export default function ColorSection() {
  const primary = { default: 'rgb(var(--primary))' };
  const groups = {
    primary,
    red: colors.red,
    orange: colors.orange,
    green: colors.green,
    blue: colors.blue,
    violet: colors.violet,
    gray: colors.gray,
  };

  const filterShades = (palette: Record<string, string>, name: string) =>
    name === 'primary'
      ? [['default', palette.default]]
      : Object.entries(palette)
          .filter(([key]) => !isNaN(Number(key)))
          .slice(0, 8);

  return (
    <>
      <Heading subtitle="색상 팔레트 / 클릭 시 클래스 복사">Color Palette</Heading>

      <div className="flex flex-col gap-10">
        {Object.entries(groups).map(([name, shades]) => (
          <div key={name}>
            <h3 className="mb-2 text-lg font-semibold capitalize">{name}</h3>

            <div className="flex flex-wrap gap-3">
              {filterShades(shades, name).map(([step, hex]) => (
                <ColorChip key={`${name}-${step}`} name={name} step={step} hex={hex} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
