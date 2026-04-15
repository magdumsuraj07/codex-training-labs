#!/usr/bin/env node

const BONUS_RATES = {
  high: 0.15,
  medium: 0.08,
  low: 0.04
};

const salary = Number(process.argv[2] || 50000);
const performance = process.argv[3] || "medium";

const payout = calculateBonus(salary, performance);
console.log(`Calculated bonus for ${performance} performance: ${payout}`);

function calculateBonus(amount, level) {
  if (!Number.isFinite(amount) || amount < 0) {
    throw new Error("Salary must be a non-negative number.");
  }

  if (!Object.prototype.hasOwnProperty.call(BONUS_RATES, level)) {
    throw new Error(`Unknown performance level: ${level}`);
  }

  return amount * BONUS_RATES[level];
}
