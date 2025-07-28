export const generateCompanyWebsite = (companyName: string) => {
  return companyName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '') + '.com';
}; 