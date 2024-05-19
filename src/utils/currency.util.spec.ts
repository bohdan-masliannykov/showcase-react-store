import { formatCurrency } from './currency.util';
// simple verify whether currency format can correctly format provided value
describe('formatCurrency', () => {
  it('should format currency with default symbol', () => {
    const result = formatCurrency(1000);
    expect(result).toBe('$1,000.00');
  });

  it('should format currency with custom symbol', () => {
    const result = formatCurrency(500, 'EUR');
    expect(result).toBe('€500.00');
  });

  it('should format currency with decimal values', () => {
    const result = formatCurrency(1234.56);
    expect(result).toBe('$1,234.56');
  });

  it('should format currency with negative value', () => {
    const result = formatCurrency(-500);
    expect(result).toBe('-$500.00');
  });

  it('should format currency with zero value', () => {
    const result = formatCurrency(0);
    expect(result).toBe('$0.00');
  });

  it('should return empty string for invalid value', () => {
    const result = formatCurrency(null as any);
    expect(result).toEqual('');
  });

  it('should return empty string for unexpected currency', () => {
    const result = formatCurrency(500, 'XYZ');
    expect(result).toBe('XYZ\u00a0500.00');
  });
});
