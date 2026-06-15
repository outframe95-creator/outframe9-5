export function getNestedValue(obj: Record<string, unknown>, path: string): string {
  return path.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) return (acc as Record<string, unknown>)[part]
    return ''
  }, obj) as string
}
