/**
 * @file
 * Sets tag for performance test execution.
 *
 * This provides a custom command, .performanceSetTag()
 *
 * @param {string} name
 *   The tag name.
 * @param {string} value
 *   The tag value.
 *
 * @return {object}
 *   The 'browser' object.
 */

exports.command = function performanceSetTag(name, value) {
  var browser = this;

  browser
    .perform(function () {
      browser.apmTrans.setTag(name, value);
    });

  return browser;
};
