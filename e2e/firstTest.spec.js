/* eslint-disable */

describe('Init app', () => {
  beforeEach(async () => {
    await device.disableSynchronization();
  });

  it('should surpass login', async () => {
    await expect(element(by.id('e2eButton'))).toBeVisible();
    await element(by.id('e2eButton')).tap();
  });

  it('should be on Main and open FAQ', async () => {
    await waitFor(element(by.id('faqButton'))).toBeVisible().withTimeout(5000);
    await waitFor(element(by.id('faqButton'))).toExist().withTimeout(5000);

    await element(by.id('faqButton')).tap();
    await waitFor(element(by.id('faqModal'))).toExist().withTimeout(5000);

    // await element(by.id('contactScreen')).toExists();
    // await element(by.id('contactScreen')).tap();
  });
});
