import IPhoneFrame from '@/components/IPhoneFrame'
import { ThemeToggle } from '@/components/theme-toggle'

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <IPhoneFrame>
        {children}
      </IPhoneFrame>
    </>
  )
}