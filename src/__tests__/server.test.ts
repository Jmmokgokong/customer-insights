import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom';
import { makeServer } from '../server';

describe('MirageJS Mock Server', () => {
  let server: any;

  beforeEach(() => {
    if (server) {
      server.shutdown();
    }
    server = makeServer();
  });

  afterEach(() => {
    if (server) {
      server.shutdown();
    }
  });

  describe('Customer Profile Endpoint', () => {
    it('should return customer profile data', async () => {
      const response = await fetch('/customers/123/profile');
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data).toHaveProperty('customerId');
      expect(data).toHaveProperty('name');
      expect(data).toHaveProperty('email');
      expect(data.name).toBe('John Doe');
    });
  });

  describe('Spending Summary Endpoint', () => {
    it('should return spending summary data', async () => {
      const response = await fetch('/customers/123/spending/summary');
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data).toHaveProperty('totalSpent');
      expect(data).toHaveProperty('averageTransaction');
      expect(data).toHaveProperty('topCategory');
      expect(data.topCategory).toBe('Groceries');
    });
  });
});
