/**
 * Check the title of the current browser window
 * @param  {Type}     falseCase     Whether to check if the title contains
 *                                  the matching expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
module.exports = (falseCase, expectedTitle) => {
    /**
     * The title of the current browser window
     * @type {String}
     */
    const title = browser.getTitle();

    if (falseCase) {
        expect(title).to.not
            .contains(
                expectedTitle,
                `Expected title not to be "${expectedTitle}"`
            );
    } else {
        expect(title).to
            .contains(
                expectedTitle,
                `Expected title to contain
                 "${expectedTitle}" but found "${title}"`

            );
    }
};
