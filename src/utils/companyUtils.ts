export const generateCompanyDomain = (companyName: string): string => {
  return companyName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '') + '.com';
}; 