import { faker } from "@faker-js/faker";

export function generateFinancialMetrics() {
  return [
    {
      label: "Total Revenue ytd",
      value: faker.finance.amount({ min: 10000, max: 500000, dec: 2 }),
      currency: "US$"
    },
    {
      label: "Unpaid Balance",
      value: faker.finance.amount({ min: 100, max: 50000, dec: 2 }),
      currency: "US$"
    },
    {
      label: "Total Amount due in the next 30 days",
      value: faker.finance.amount({ min: 100, max: 30000, dec: 2 }),
      currency: "US$"
    },
    {
      label: "Invoices past due date",
      value: faker.finance.amount({ min: 0, max: 10000, dec: 2 }),
      currency: "US$"
    }
  ];
}

export function generateAccounts(count = 3) {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.company.name(),
    email: faker.internet.email(),
    unpaidBalance: Number.parseFloat(faker.finance.amount({ min: 100, max: 500000, dec: 2 })),
    overdue: Number.parseFloat(faker.finance.amount({ min: 0, max: 10000, dec: 2 })),
    address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()} ${faker.location.zipCode()}`,
    lastAccessed: faker.date.recent({ days: 365 }).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    })
  }));
}

export function generateInvoices(count = 10) {
  return Array.from({ length: count }, () => {
    const totalAmount = Number.parseFloat(faker.finance.amount({ min: 100, max: 50000, dec: 0 }));
    const amountBalance = Number.parseFloat(faker.finance.amount({ min: 0, max: totalAmount, dec: 0 }));

    return {
      id: faker.string.uuid(),
      number: faker.number.int({ min: 1000000, max: 9999999 }).toString(),
      vendor: `${faker.company.name()} - ${faker.word.adjective().toUpperCase()} ${faker.date.month().toUpperCase().slice(0, 3)} ${faker.number.int({ min: 15, max: 25 })}`,
      totalAmount,
      amountBalance,
      invoiceDate: faker.date.past({ years: 1 }).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }),
      dueDate: faker.date.future({ years: 1 }).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }),
      invoiceAmount: Number.parseFloat(faker.finance.amount({ min: 10, max: 1000, dec: 2 }))
    };
  });
}

export function generatePartialInvoices(count = 5) {
  return Array.from({ length: count }, () => {
    const totalAmount = Number.parseFloat(faker.finance.amount({ min: 1000, max: 10000, dec: 0 }));
    const amountPaid = Number.parseFloat(faker.finance.amount({ min: totalAmount * 0.1, max: totalAmount * 0.95, dec: 0 }));

    return {
      id: faker.string.uuid(),
      number: `#${faker.number.int({ min: 1000, max: 9999 })}`,
      amountPaid,
      totalAmount,
      dueDate: faker.date.future({ years: 1 }).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }),
      checked: faker.datatype.boolean()
    };
  });
}
