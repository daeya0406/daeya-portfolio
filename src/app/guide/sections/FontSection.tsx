'use client';

import { toast } from 'sonner';
import { Typo } from '@/components/ui/Text';

const TYPO_SCALES = [
  {
    label: '<Typo.h1>',
    className: 'typo-h1',
    sample: 'Page Title',
    snippet: '<Typo.h1>Page Title</Typo.h1>',
  },
  {
    label: '<Typo.h2>',
    className: 'typo-h2',
    sample: 'Section Title',
    snippet: '<Typo.h2>Section Title</Typo.h2>',
  },
  {
    label: '<Typo.h3>',
    className: 'typo-h3',
    sample: 'Subsection Title',
    snippet: '<Typo.h3>Subsection Title</Typo.h3>',
  },
  {
    label: '<Typo.h4>',
    className: 'typo-h4',
    sample: 'Section Subtitle',
    snippet: '<Typo.h4>Section Subtitle</Typo.h4>',
  },
  {
    label: '<Typo.h5>',
    className: 'typo-h5',
    sample: 'Label Heading',
    snippet: '<Typo.h5>Label Heading</Typo.h5>',
  },
  {
    label: '<Typo.h6>',
    className: 'typo-h6',
    sample: 'Mini Heading',
    snippet: '<Typo.h6>Mini Heading</Typo.h6>',
  },
  {
    label: '<Typo.bodyXl>',
    className: 'typo-body-xl',
    sample: 'Body XL',
    snippet: '<Typo.bodyXl>Body XL</Typo.bodyXl>',
  },
  {
    label: '<Typo.bodyLg>',
    className: 'typo-body-lg',
    sample: 'Body Large',
    snippet: '<Typo.bodyLg>Body Large</Typo.bodyLg>',
  },
  {
    label: '<Typo.bodyMd>',
    className: 'typo-body-md',
    sample: 'Body Medium',
    snippet: '<Typo.bodyMd>Body Medium</Typo.bodyMd>',
  },
  {
    label: '<Typo.bodySm>',
    className: 'typo-body-sm',
    sample: 'Body Small',
    snippet: '<Typo.bodySm>Body Small</Typo.bodySm>',
  },
  {
    label: '<Typo.bodyXs>',
    className: 'typo-body-xs',
    sample: 'Body XSmall',
    snippet: '<Typo.bodyXs>Body XSmall</Typo.bodyXs>',
  },
  {
    label: '<Typo.caption>',
    className: 'typo-caption',
    sample: 'Caption',
    snippet: '<Typo.caption>Caption</Typo.caption>',
  },
  {
    label: '<Typo.overline>',
    className: 'typo-overline',
    sample: 'OVERLINE',
    snippet: '<Typo.overline>OVERLINE</Typo.overline>',
  },
];

export default function FontSection() {
  const copy = (text: string, toastText: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied: ${toastText}`, { duration: 1500 });
  };

  return (
    <>
      <div className="line-bottom mb-8 space-y-2">
        <Typo.h3 className="text-primary">Font System</Typo.h3>
        <Typo.caption>폰트 크기 스케일 / 클릭 시 컴포넌트 태그 복사</Typo.caption>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {TYPO_SCALES.map(({ label, className, sample, snippet }) => (
          <button
            key={label}
            onClick={() => copy(snippet, label)}
            className="group flex flex-col items-start rounded-md p-4 text-left transition hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            <span className={`${className} mb-1`}>{sample}</span>
            <span className="text-muted-foreground group-hover:text-primary text-xs">{label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
