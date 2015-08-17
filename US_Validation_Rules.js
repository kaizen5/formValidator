/*
 * Validation Rules.
 *
 * Required:
 * All inputs that have a data-validate property are assumed to be required, unless
 * explicitly written as false with data-required=false.
 *
 *
 * Rulesets:
 * Rulesets bundle the category with a rule.  Some rules are boolean (required, whitelist, blacklist),
 * and some require data (minLength, maxLength).
 *
 * Rules:
 * Each rule needs to be defined with their specified validation needs.
 * Each rule has a 'match' property, which simply put, is asking the question 'does the pattern
 * match the input we ALLOW, or DISALLOW?'  Example: a whitelist is all characters we ALLOW (match: true),
 * whereas a blacklist (match: false) is all the characters we do NOT allow.
 *
 */

module.exports = {
  config: {
    country: 'US',
    langLocale: 'en_US'
  },

  rulesets: {
    name: {
      required: true,
      whitelist: true,
      alphaNumericOnly: true,
      minLength: 2,
      maxLength: 35
    },
    address: {
      required: true,
      whitelist: true,
      alphaNumericOnly: true,
      minLength: 2,
      maxLength: 35
    },
    city: {
      required: true,
      whitelist: true,
      minLength: 2,
      maxLength: 35
    },
    state: {
      required: true,
      whitelist: true,
      minLength: 2,
      maxLength: 35
    },
    phone: {
      required: false,
      minLength: 10,
      maxLength: 14,
      phone: true
    },
    email: {
      required: true,
      email: true,
      minLength: 5,
      maxLength: 35
    },
    number: {
      required: true,
      number: true
    },
    zip: {
      required: true,
      zip: true,
      minLength: 5,
      maxLength: 10
    }

  },

  rules: {
    whitelist: {
      match: true,
      pattern: /^[ 0-9 A-Z a-z #&'(),-._ \u00A1-\u00A6 \u00A8-\u00FF \u0131 \u0141 \u0142 \u0152 \u0153 \u0160 \u0161 \u0178-\u017A ]*$/,
      message: 'Invalid characters: {0}'
    },

    required: {
      match: true,
      pattern: /.+/,
      message: 'This field is required.'
    },

    alphaNumericOnly: {
      match: true,
      pattern: /^\w+$/i,
      message: 'Invalid input. Letters and numbers only.'
    },

    maxLength: {
      message: 'No more than {0} characters allowed.'
    },

    minLength: {
      message: 'At least {0} characters required.'
    },

    zip: {
      match: true,
      pattern: /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/,
      message: 'Invalid format. Expected: xxxxx OR xxxxx-xxxx'
    },

    number: {
      match: true,
      pattern: /^[0-9]+$/
    },

    phone: {
      match: true,
      pattern: /^[ ()-.+ 0-9 ]*$/,
      message: 'Invalid phone format.'
    },

    email: {
      match: true,
      pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      message: 'Invalid email.'
    }

  }

};
