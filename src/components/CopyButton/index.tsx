import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../Button'
import { CheckIcon, CopyIcon } from 'lucide-react'

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
  src?: string
}

export async function CopyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value)
}

export function CopyButton({
  value,
  className
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <Button
      variant="ghost"
      className={cn(
        'relative z-10 size-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50',
        className
      )}
      onClick={() => {
        CopyToClipboardWithMeta(value)
        setHasCopied(true)
      }}
    >
      <span className="sr-only">Copy</span>

      {hasCopied ? (
        <CheckIcon className="size-3" />
      ) : (
        <CopyIcon className="size-3" />
      )}
    </Button>
  )
}

const packageManagers = ['npm', 'yarn', 'pnpm', 'bun'] as const

export function CopyNpmCommandButton({
  commands,
  className,
  ...props
}: any) {
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const copyCommand = useCallback(
    (value: string) => {
      CopyToClipboardWithMeta(value)

      setHasCopied(true)
    },
    []
  )

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild {...props}>
        <Button
          variant="ghost"
          className={cn(
            'relative z-10 size-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50',
            className
          )}
        >
          {hasCopied ? (
            <CheckIcon className="size-3" />
          ) : (
            <CopyIcon className="size-3" />
          )}

          <span className="sr-only">Copy</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {packageManagers.map((packageManager) => {
          const packageManagerKey = Object.keys(commands).find(
            (key) => key === `__${packageManager}Command__`
          ) as any

          return (
            <DropdownMenuItem
              key={packageManager}
              onClick={() =>
                copyCommand(commands[packageManagerKey])
              }
            >
              {packageManager}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
