'use client';

import { Heading } from '@/components/common/Heading';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

import {
  Sun,
  Moon,
  Github,
  Menu,
  X,
  ChevronDown,
  Copy,
  Loader2,
  ChevronUp,
  Check,
  EllipsisVertical,
} from 'lucide-react';

import { toast } from 'sonner';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/Select';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/Dialog';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/DropdownMenu';

export default function UISection() {
  const icons = {
    Sun,
    Moon,
    Github,
    Menu,
    X,
    ChevronDown,
    Copy,
    Loader2,
    ChevronUp,
    Check,
  };

  return (
    <>
      <Heading>UI Components</Heading>

      <div className="flex flex-col gap-10">
        {/* Button */}
        <div className="flex flex-col gap-3">
          <p className="text-muted-foreground text-sm">Button Variants</p>
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">보조 버튼</Button>
            <Button variant="outline">아웃라인</Button>
            <Button disabled>Disabled</Button>
            <Button isLoading>Loading</Button>
          </div>
        </div>

        {/* Input */}
        <div className="flex flex-col gap-3">
          <p className="text-muted-foreground text-sm">Input</p>
          <Input placeholder="이메일을 입력하세요" className="max-w-sm" />
        </div>

        {/* Textarea */}
        <div className="flex flex-col gap-3">
          <p className="text-muted-foreground text-sm">Textarea</p>
          <Textarea placeholder="메시지를 입력하세요..." className="max-w-sm" />
        </div>

        {/* Select */}
        <div className="flex flex-col gap-3">
          <p className="text-muted-foreground text-sm">Select (Radix)</p>
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="nextjs">Next.js</SelectItem>
              <SelectItem value="tailwind">Tailwind</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Dialog */}
        <div className="flex flex-col gap-3">
          <p className="text-muted-foreground text-sm">Dialog (Modal)</p>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-[160px]">모달 열기</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogTitle>모달 제목</DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2 text-sm">
                모달입니다.
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>

        {/* Dropdown Menu */}
        <div className="flex flex-col gap-3">
          <p className="text-muted-foreground text-sm">Dropdown Menu</p>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[40px] px-0">
                <EllipsisVertical className="text-slate-500" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" sideOffset={4}>
              <DropdownMenuItem>프로필 보기</DropdownMenuItem>
              <DropdownMenuItem>수정하기</DropdownMenuItem>
              <DropdownMenuItem>삭제하기</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Icon */}
        <div className="flex flex-col gap-3">
          <p className="text-muted-foreground text-sm">Icons (Lucide)</p>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-[180px]">
                아이콘 보기
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl">
              <DialogTitle>Icon Library</DialogTitle>
              <DialogDescription className="text-muted-foreground mt-1 text-sm">
                클릭하면 JSX 코드가 복사됩니다.
              </DialogDescription>

              <div className="mt-4 grid grid-cols-5 gap-4">
                {Object.entries(icons).map(([name, Icon]) => (
                  <button
                    key={name}
                    onClick={() => {
                      const code = `<${name} className="h-5 w-5" />`;
                      navigator.clipboard.writeText(code);
                      toast.success(`Copied: ${name}`);
                    }}
                    className="hover:bg-muted/40 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md p-3 transition"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-muted-foreground text-xs">{name}</span>
                  </button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
