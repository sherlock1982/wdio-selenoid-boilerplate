describe('Test google.com', () => {
    it('Should open correctly', () => {
        browser.url('https://google.com');
        browser.pause(5000);
    });
});
