'use client'

export default function EnvTestPage() {
  return (
    <pre>
      URL: {process.env.NEXT_PUBLIC_SUPABASE_URL || 'NOT LOADED'}
      {'\n'}
      KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'NOT LOADED'}
    </pre>
  )
}
