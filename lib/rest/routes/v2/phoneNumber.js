'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var PhoneNumberList;
var PhoneNumberPage;
var PhoneNumberInstance;
var PhoneNumberContext;

/* jshint ignore:start */
/**
 * Initialize the PhoneNumberList
 *
 * @constructor Twilio.Routes.V2.PhoneNumberList
 *
 * @param {Twilio.Routes.V2} version - Version of the resource
 */
/* jshint ignore:end */
PhoneNumberList = function PhoneNumberList(version) {
  /* jshint ignore:start */
  /**
   * @function phoneNumbers
   * @memberof Twilio.Routes.V2#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Routes.V2.PhoneNumberContext}
   */
  /* jshint ignore:end */
  function PhoneNumberListInstance(sid) {
    return PhoneNumberListInstance.get(sid);
  }

  PhoneNumberListInstance._version = version;
  // Path Solution
  PhoneNumberListInstance._solution = {};
  /* jshint ignore:start */
  /**
   * Constructs a phone_number
   *
   * @function get
   * @memberof Twilio.Routes.V2.PhoneNumberList#
   *
   * @param {string} phoneNumber - The phone number
   *
   * @returns {Twilio.Routes.V2.PhoneNumberContext}
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.get = function get(phoneNumber) {
    return new PhoneNumberContext(this._version, phoneNumber);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Routes.V2.PhoneNumberList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  PhoneNumberListInstance[util.inspect.custom] = function inspect(depth, options)
      {
    return util.inspect(this.toJSON(), options);
  };

  return PhoneNumberListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the PhoneNumberPage
 *
 * @constructor Twilio.Routes.V2.PhoneNumberPage
 *
 * @param {V2} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {PhoneNumberSolution} solution - Path solution
 *
 * @returns PhoneNumberPage
 */
/* jshint ignore:end */
PhoneNumberPage = function PhoneNumberPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(PhoneNumberPage.prototype, Page.prototype);
PhoneNumberPage.prototype.constructor = PhoneNumberPage;

/* jshint ignore:start */
/**
 * Build an instance of PhoneNumberInstance
 *
 * @function getInstance
 * @memberof Twilio.Routes.V2.PhoneNumberPage#
 *
 * @param {PhoneNumberPayload} payload - Payload response from the API
 *
 * @returns PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberPage.prototype.getInstance = function getInstance(payload) {
  return new PhoneNumberInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Routes.V2.PhoneNumberPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
PhoneNumberPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

PhoneNumberPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the PhoneNumberContext
 *
 * @constructor Twilio.Routes.V2.PhoneNumberInstance
 *
 * @property {string} phoneNumber - The phone number
 * @property {string} url - The absolute URL of the resource
 * @property {string} sid -
 *          A string that uniquely identifies the Inbound Processing Region assignments for this phone number.
 * @property {string} accountSid - Account Sid.
 * @property {string} friendlyName -
 *          A human readable description of the Inbound Processing Region assignments for this phone number.
 * @property {string} voiceRegion -
 *          The Inbound Processing Region used for this phone number for voice.
 * @property {Date} dateCreated -
 *          The date that this phone number was assigned an Inbound Processing Region.
 * @property {Date} dateUpdated -
 *          The date that the Inbound Processing Region was updated for this phone number.
 *
 * @param {V2} version - Version of the resource
 * @param {PhoneNumberPayload} payload - The instance payload
 * @param {string} phoneNumber - The phone number
 */
/* jshint ignore:end */
PhoneNumberInstance = function PhoneNumberInstance(version, payload,
                                                    phoneNumber) {
  this._version = version;

  // Marshaled Properties
  this.phoneNumber = payload.phone_number; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.voiceRegion = payload.voice_region; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {phoneNumber: phoneNumber || this.phoneNumber, };
};

Object.defineProperty(PhoneNumberInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new PhoneNumberContext(this._version, this._solution.phoneNumber);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * update a PhoneNumberInstance
 *
 * @function update
 * @memberof Twilio.Routes.V2.PhoneNumberInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.voiceRegion] -
 *          The Inbound Processing Region used for this phone number for voice
 * @param {string} [opts.friendlyName] -
 *          A human readable description of this resource.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * fetch a PhoneNumberInstance
 *
 * @function fetch
 * @memberof Twilio.Routes.V2.PhoneNumberInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Routes.V2.PhoneNumberInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
PhoneNumberInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

PhoneNumberInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the PhoneNumberContext
 *
 * @constructor Twilio.Routes.V2.PhoneNumberContext
 *
 * @param {V2} version - Version of the resource
 * @param {string} phoneNumber - The phone number
 */
/* jshint ignore:end */
PhoneNumberContext = function PhoneNumberContext(version, phoneNumber) {
  this._version = version;

  // Path Solution
  this._solution = {phoneNumber: phoneNumber, };
  this._uri = `/PhoneNumbers/${phoneNumber}`;
};

/* jshint ignore:start */
/**
 * update a PhoneNumberInstance
 *
 * @function update
 * @memberof Twilio.Routes.V2.PhoneNumberContext#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.voiceRegion] -
 *          The Inbound Processing Region used for this phone number for voice
 * @param {string} [opts.friendlyName] -
 *          A human readable description of this resource.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'VoiceRegion': _.get(opts, 'voiceRegion'),
    'FriendlyName': _.get(opts, 'friendlyName')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new PhoneNumberInstance(this._version, payload, this._solution.phoneNumber));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * fetch a PhoneNumberInstance
 *
 * @function fetch
 * @memberof Twilio.Routes.V2.PhoneNumberContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new PhoneNumberInstance(this._version, payload, this._solution.phoneNumber));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Routes.V2.PhoneNumberContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
PhoneNumberContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

PhoneNumberContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  PhoneNumberList: PhoneNumberList,
  PhoneNumberPage: PhoneNumberPage,
  PhoneNumberInstance: PhoneNumberInstance,
  PhoneNumberContext: PhoneNumberContext
};
