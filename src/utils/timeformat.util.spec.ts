import { formatTime } from './timeformat.util';

describe('formatTime', () => {
  it('should format time correctly for 0 milliseconds', () => {
    const result = formatTime(0);
    expect(result).toBe('00:00');
  });

  it('should format time correctly for 500 milliseconds', () => {
    const result = formatTime(500);
    expect(result).toBe('00:00');
  });

  it('should format time correctly for 1000 milliseconds', () => {
    const result = formatTime(1000);
    expect(result).toBe('00:01');
  });

  it('should format time correctly for 60000 milliseconds', () => {
    const result = formatTime(60000);
    expect(result).toBe('01:00');
  });

  it('should format time correctly for 123456 milliseconds', () => {
    const result = formatTime(123456);
    expect(result).toBe('02:03');
  });

  it('should return 00:00 on wrong type passed', () => {
    const result = formatTime(null as any);
    expect(result).toBe('00:00');
  });
});
