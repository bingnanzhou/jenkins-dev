webpackJsonp([1],Array(520).concat([
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(382);
	
	var _users = __webpack_require__(521);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _UsersListView = __webpack_require__(527);
	
	var _UsersListView2 = _interopRequireDefault(_UsersListView);
	
	var _EditUserContainer = __webpack_require__(586);
	
	var _EditUserContainer2 = _interopRequireDefault(_EditUserContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*  Object of action creators (can also be function that returns object).
	 Keys will be passed as props to presentational components. Here we are
	 implementing our wrapper around increment; the component doesn't care   */
	
	/*  This is a container component. Notice it does not contain any JSX,
	 nor does it import React. This component is **only** responsible for
	 wiring in the actions and state necessary to render a presentational
	 component - in this case, the counter:   */
	
	var mapDispatchToProps = _users.actions;
	
	var mapStateToProps = function mapStateToProps(state) {
	  var _state$users = state.users,
	      hasFetchedUsers = _state$users.hasFetchedUsers,
	      isFetchingUsers = _state$users.isFetchingUsers,
	      beingEdited = _state$users.beingEdited,
	      updatingUserId = _state$users.updatingUserId,
	      updatedUserId = _state$users.updatedUserId;
	
	
	  return {
	    users: state.users.items,
	    roles: state.roles.roles,
	    hasFetchedUsers: hasFetchedUsers,
	    isFetchingUsers: isFetchingUsers
	  };
	};
	
	/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:
	
	 import { createSelector } from 'reselect'
	 const counter = (state) => state.counter
	 const tripleCount = createSelector(counter, (count) => count * 3)
	 const mapStateToProps = (state) => ({
	 counter: tripleCount(state)
	 })
	
	 Selectors can compute derived data, allowing Redux to store the minimal possible state.
	 Selectors are efficient. A selector is not recomputed unless one of its arguments change.
	 Selectors are composable. They can be used as input to other selectors.
	 https://github.com/reactjs/reselect    */
	
	var RegisteredUsersListContainier = function (_Component) {
	  (0, _inherits3.default)(RegisteredUsersListContainier, _Component);
	
	  function RegisteredUsersListContainier() {
	    (0, _classCallCheck3.default)(this, RegisteredUsersListContainier);
	    return (0, _possibleConstructorReturn3.default)(this, (RegisteredUsersListContainier.__proto__ || (0, _getPrototypeOf2.default)(RegisteredUsersListContainier)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(RegisteredUsersListContainier, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (!this.props.hasFetchedUsers) {
	        this.props.fetchAll();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_UsersListView2.default, this.props),
	        _react2.default.createElement(_EditUserContainer2.default, null)
	      );
	    }
	  }]);
	  return RegisteredUsersListContainier;
	}(_react.Component);
	
	RegisteredUsersListContainier.propTypes = {
	  // List
	  roles: _propTypes2.default.array.isRequired,
	  users: _propTypes2.default.array.isRequired,
	  hasFetchedUsers: _propTypes2.default.bool.isRequired,
	  isFetchingUsers: _propTypes2.default.bool.isRequired,
	  fetchAll: _propTypes2.default.func.isRequired,
	
	  // Edit
	  beingEdited: _propTypes2.default.object,
	  updatingUserId: _propTypes2.default.string,
	  updatedUserId: _propTypes2.default.string,
	
	  deleteUser: _propTypes2.default.func.isRequired,
	  enterEdit: _propTypes2.default.func.isRequired,
	  exitEdit: _propTypes2.default.func.isRequired,
	  saveEdit: _propTypes2.default.func.isRequired,
	  setUserEnabled: _propTypes2.default.func.isRequired
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RegisteredUsersListContainier);

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = undefined;
	
	var _assign = __webpack_require__(288);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	exports.default = usersReducer;
	
	var _ApiClient = __webpack_require__(473);
	
	var _ApiClient2 = _interopRequireDefault(_ApiClient);
	
	var _updateById = __webpack_require__(522);
	
	var _updateById2 = _interopRequireDefault(_updateById);
	
	var _findById = __webpack_require__(523);
	
	var _findById2 = _interopRequireDefault(_findById);
	
	var _deleteById = __webpack_require__(524);
	
	var _deleteById2 = _interopRequireDefault(_deleteById);
	
	var _users = __webpack_require__(525);
	
	var _users2 = _interopRequireDefault(_users);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*  This is a thunk, meaning it is a function that immediately
	 returns a function for lazy evaluation. It is incredibly useful for
	 creating async actions, especially when combined with redux-thunk! */
	
	var fetchAll = function fetchAll() {
	  return function (dispatch, getState) {
	
	    dispatch({
	      type: _users2.default.REQUESTING_USERS
	    });
	
	    return _ApiClient2.default.get('/users?filter[include]=userProfile').then(function (users) {
	      dispatch({
	        type: _users2.default.RECEIVED_USERS,
	        users: users
	      });
	    }).catch(function (err) {
	      dispatch({
	        type: _users2.default.UNAUTHORIZED,
	        err: err
	      });
	    });
	  };
	};
	
	var setUserEnabled = function setUserEnabled(userId, enabled) {
	  return function (dispatch, getState) {
	    dispatch({
	      type: _users2.default.SAVING_USER_UPDATES,
	      userId: userId
	    });
	
	    var req = _ApiClient2.default.put('/users/' + userId + '/userProfile', {
	      data: { enabled: enabled }
	    }).then(function (userProfile) {
	      var oldUserData = (0, _findById2.default)(userId, getState().users.items);
	      var userData = (0, _assign2.default)({}, oldUserData, {
	        userProfile: userProfile
	      });
	
	      dispatch({
	        type: _users2.default.SAVED_USER_UPDATES,
	        userId: userId,
	        userData: userData
	      });
	    }).catch(function (err) {
	      dispatch({
	        type: _users2.default.SAVED_USER_UPDATES_ERROR,
	        userId: userId,
	        err: err
	      });
	    });
	  };
	};
	
	var editUser = function editUser(userData) {
	  return function (dispatch) {
	    dispatch({
	      type: _users2.default.EDIT_USER,
	      userData: userData
	    });
	  };
	};
	
	var deleteUser = function deleteUser(userId) {
	  return function (dispatch, getState) {
	    console.log('called deleteUser', userId);
	    dispatch({
	      type: _users2.default.DELETING_USER,
	      userId: userId
	    });
	
	    var req = _ApiClient2.default.del('/users/' + userId).then(function () {
	      dispatch({
	        type: _users2.default.DELETED_USER,
	        userId: userId
	      });
	    }).catch(function (err) {
	      dispatch({
	        type: _users2.default.DELETED_USER_ERROR,
	        userId: userId,
	        err: err
	      });
	    });
	  };
	};
	
	var enterEdit = function enterEdit(userId) {
	  return function (dispatch) {
	    dispatch({
	      type: _users2.default.START_EDITING_USER,
	      userId: userId
	    });
	  };
	};
	
	var exitEdit = function exitEdit() {
	  return function (dispatch) {
	    dispatch({
	      type: _users2.default.EXIT_EDITING_USER
	    });
	  };
	};
	
	var saveEdit = function saveEdit(userId) {
	  return function (dispatch, getState) {
	
	    // TODO : save
	    dispatch({
	      type: _users2.default.SAVING_USER_UPDATES,
	      userId: userId
	    });
	
	    var items = getState().users.items;
	    // Get the data - then
	
	    var userData = (0, _findById2.default)(userId, items); // Get a copy
	    delete userData.isDirty;
	
	    // TODO
	
	  };
	};
	
	var actions = exports.actions = {
	  fetchAll: fetchAll,
	
	  setUserEnabled: setUserEnabled,
	  editUser: editUser,
	  deleteUser: deleteUser,
	
	  enterEdit: enterEdit,
	  exitEdit: exitEdit,
	  saveEdit: saveEdit
	};
	
	var DEFAULT_STATE = {
	  hasFetchedUsers: false,
	  isFetchingUsers: false,
	  isAuthenticated: true,
	  beingEdited: null,
	  updatingUserId: false,
	  updatedUserId: false,
	  items: []
	};
	
	function usersReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _users2.default.UNAUTHORIZED:
	      return (0, _assign2.default)({}, state, {
	        isAuthenticated: false
	      });
	
	    case _users2.default.REQUESTING_USERS:
	      return (0, _assign2.default)({}, state, {
	        isFetchingUsers: true
	      });
	
	    case _users2.default.RECEIVED_USERS:
	      return (0, _assign2.default)({}, state, {
	        isFetchingUsers: false,
	        hasFetchedUsers: true,
	        items: action.users
	      });
	
	    case _users2.default.START_EDITING_USER:
	      return (0, _assign2.default)({}, state, {
	        beingEdited: action.userId
	      });
	
	    case _users2.default.EDIT_USER:
	      return function () {
	        var userData = (0, _assign2.default)({}, action.userData, {
	          isDirty: true
	        });
	        var items = (0, _updateById2.default)(action.userId, state.items, userData);
	        return (0, _assign2.default)({}, state, {
	          items: items
	        });
	      }();
	
	    case _users2.default.DELETING_USER:
	    case _users2.default.SAVING_USER_UPDATES:
	      return (0, _assign2.default)({}, state, {
	        updatingUserId: action.userId
	      });
	
	    case _users2.default.SAVED_USER_UPDATES:
	      return function () {
	        var items = (0, _updateById2.default)(action.userId, state.items, action.userData);
	        return (0, _assign2.default)({}, state, {
	          updatingUserId: null,
	          updatedUserId: action.userId,
	          items: items
	        });
	      }();
	
	    case _users2.default.SAVED_USER_UPDATES_ERROR:
	
	      // TODO;
	      return;
	
	    case _users2.default.EXIT_EDITING_USER:
	      return (0, _assign2.default)({}, state, {
	        beingEdited: null
	      });
	
	    case _users2.default.DELETED_USER:
	      return (0, _assign2.default)({}, state, {
	        items: (0, _deleteById2.default)(action.userId, state.items)
	      });
	
	    case _users2.default.DELETED_USER_ERROR:
	      // TODO
	      return;
	
	    default:
	      return state;
	  }
	}

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(288);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Returns copy of arr, with updated copy of found item
	var updateById = function updateById(id, arr, data) {
	  var result = arr.map(function (o, i) {
	    if (o.id !== id) {
	      return o;
	    }
	
	    return (0, _assign2.default)({}, o, data);
	  });
	
	  return result;
	};
	
	exports.default = updateById;

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// Returns a shallow copy
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(288);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findById = function findById(id, arr) {
	  var item = arr.find(function (u, i) {
	    return u.id === id;
	  });
	
	  return item && (0, _assign2.default)({}, item);
	};
	
	exports.default = findById;

/***/ }),
/* 524 */
/***/ (function(module, exports) {

	'use strict';
	
	// Completely replaces old with or inserts newItem
	// Return the modified copy of the arr
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var deleteById = function deleteById(id, arr) {
	  var index = arr.findIndex(function (x) {
	    return x.id === id;
	  });
	  if (index === -1) {
	    return arr;
	  }
	
	  var newArr = [].concat(arr);
	  newArr.splice(index, 1);
	
	  return newArr;
	};
	
	exports.default = deleteById;

/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _GenerateActionTypes = __webpack_require__(526);
	
	var _GenerateActionTypes2 = _interopRequireDefault(_GenerateActionTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var list = ['UNAUTHORIZED', 'REQUESTING_USERS', 'RECEIVED_USERS', 'SAVING_USER_UPDATES', 'SAVED_USER_UPDATES', 'SAVED_USER_UPDATES_ERROR', 'START_EDITING_USER', 'EDIT_USER', 'EXIT_EDITING_USER', 'DELETING_USER', 'DELETED_USER', 'DELETED_USER_ERROR'];
	var ACTION_TYPES = (0, _GenerateActionTypes2.default)('USER', list);
	exports.default = ACTION_TYPES;

/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _enumify = __webpack_require__(472);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var generateList = function generateList(noun, list, plural) {
	
	  plural = plural || noun + 'S';
	  list = list || ['REQUESTING_' + plural, 'RECEIVED_' + plural, 'RECEIVED_' + plural + '_ERROR', 'ONCHANGE_SELECTED_' + plural, 'DELETING_' + plural, 'DELETED_' + plural, 'DELETED_' + plural + '_ERROR', 'CREATING_' + noun, 'CREATED_' + noun, 'CREATED_' + noun + '_ERROR', 'ADDED_' + noun, 'UPDATING_' + noun, 'UPDATED_' + noun, 'UPDATED_' + noun + '_ERROR', 'CHANGE_DRAFT_' + noun];
	
	  var ACTION_TYPES = function (_Enum) {
	    (0, _inherits3.default)(ACTION_TYPES, _Enum);
	
	    function ACTION_TYPES() {
	      (0, _classCallCheck3.default)(this, ACTION_TYPES);
	      return (0, _possibleConstructorReturn3.default)(this, (ACTION_TYPES.__proto__ || (0, _getPrototypeOf2.default)(ACTION_TYPES)).apply(this, arguments));
	    }
	
	    return ACTION_TYPES;
	  }(_enumify.Enum);
	
	  ACTION_TYPES.initEnum(list);
	
	  return ACTION_TYPES;
	};
	
	exports.default = generateList;

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	__webpack_require__(528);
	
	var _UserListItem = __webpack_require__(530);
	
	var _UserListItem2 = _interopRequireDefault(_UserListItem);
	
	var _List = __webpack_require__(544);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UsersListView = function UsersListView(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'user-list-view' },
	    _react2.default.createElement(
	      _List.List,
	      null,
	      props.users.map(function (user, i) {
	        var id = user.id;
	
	        var setUserEnabled = props.setUserEnabled.bind(null, id);
	        var enterEdit = props.enterEdit.bind(null, id);
	        var onDelete = props.deleteUser.bind(null, id);
	        return _react2.default.createElement(_UserListItem2.default, (0, _extends3.default)({}, user, { key: id, setUserEnabled: setUserEnabled, onEdit: enterEdit, onDelete: onDelete }));
	      })
	    )
	  );
	};
	
	UsersListView.propTypes = {
	  users: _propTypes2.default.array.isRequired,
	  hasFetchedUsers: _propTypes2.default.bool,
	  isFetchingUsers: _propTypes2.default.bool,
	  setUserEnabled: _propTypes2.default.func.isRequired,
	  deleteUser: _propTypes2.default.func.isRequired
	};
	
	exports.default = UsersListView;

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(529);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(468)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(529, function() {
				var newContent = __webpack_require__(529);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(467)();
	// imports
	
	
	// module
	exports.push([module.id, ".user-list-view{width:300px;margin:0 auto}", "", {"version":3,"sources":["/Users/kruegerm/dev/projects/outage-prediction/user-admin-ui/src/routes/RegisteredUsers/components/src/routes/RegisteredUsers/components/UsersListView.scss"],"names":[],"mappings":"AAAA,gBAEE,YAAY,aACE,CAEf","file":"UsersListView.scss","sourcesContent":[".user-list-view {\n\n  width: 300px;\n  margin: 0 auto;\n\n}"],"sourceRoot":""}]);
	
	// exports


/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	__webpack_require__(531);
	
	var _Toggle = __webpack_require__(533);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	var _List = __webpack_require__(544);
	
	var _colors = __webpack_require__(412);
	
	var _IconButton = __webpack_require__(553);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _moreVert = __webpack_require__(573);
	
	var _moreVert2 = _interopRequireDefault(_moreVert);
	
	var _IconMenu = __webpack_require__(574);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _MenuItem = __webpack_require__(585);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var iconButtonElement = _react2.default.createElement(
	  _IconButton2.default,
	  { touch: true },
	  _react2.default.createElement(_moreVert2.default, { color: _colors.grey400 })
	);
	
	var UsersListItem = function UsersListItem(props) {
	  var enabled = props.userProfile.enabled,
	      onEdit = props.onEdit;
	
	
	  var enable_disable = enabled ? 'Disable' : 'Enable';
	  var toggleEnabled = function toggleEnabled() {
	    props.setUserEnabled(!enabled);
	  };
	
	  var rightIconMenu =
	  //<IconMenu iconButtonElement={iconButtonElement}>
	  //  <MenuItem onTouchTap={onEdit}>Edit</MenuItem>
	  //  <MenuItem onTouchTap={toggleEnabled}>{enable_disable}</MenuItem>
	  //  <MenuItem>Delete</MenuItem>
	  //</IconMenu>
	  // TODO: Fix Edit User
	  _react2.default.createElement(
	    _IconMenu2.default,
	    { iconButtonElement: iconButtonElement },
	    _react2.default.createElement(
	      _MenuItem2.default,
	      { onTouchTap: toggleEnabled },
	      enable_disable
	    ),
	    _react2.default.createElement(
	      _MenuItem2.default,
	      { onTouchTap: props.onDelete },
	      'Delete'
	    )
	  );
	
	  return _react2.default.createElement(_List.ListItem, { primaryText: props.email, rightIconButton: rightIconMenu });
	};
	
	UsersListItem.propTypes = {
	  setUserEnabled: _propTypes2.default.func.isRequired,
	  email: _propTypes2.default.string
	};
	
	exports.default = UsersListItem;

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(532);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(468)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(532, function() {
				var newContent = __webpack_require__(532);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(467)();
	// imports
	
	
	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"UserListItem.scss","sourceRoot":""}]);
	
	// exports


/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Toggle = __webpack_require__(534);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Toggle2.default;

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _Paper = __webpack_require__(501);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _EnhancedSwitch = __webpack_require__(535);
	
	var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var disabled = props.disabled,
	      elementStyle = props.elementStyle,
	      trackSwitchedStyle = props.trackSwitchedStyle,
	      thumbSwitchedStyle = props.thumbSwitchedStyle,
	      trackStyle = props.trackStyle,
	      thumbStyle = props.thumbStyle,
	      iconStyle = props.iconStyle,
	      rippleStyle = props.rippleStyle,
	      labelStyle = props.labelStyle;
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      toggle = _context$muiTheme.toggle;
	
	
	  var toggleSize = 20;
	  var toggleTrackWidth = 36;
	  var styles = {
	    icon: {
	      width: 36,
	      padding: '4px 0px 6px 2px'
	    },
	    ripple: {
	      top: -10,
	      left: -10,
	      color: state.switched ? toggle.thumbOnColor : baseTheme.palette.textColor
	    },
	    toggleElement: {
	      width: toggleTrackWidth
	    },
	    track: {
	      transition: _transitions2.default.easeOut(),
	      width: '100%',
	      height: 14,
	      borderRadius: 30,
	      backgroundColor: toggle.trackOffColor
	    },
	    thumb: {
	      transition: _transitions2.default.easeOut(),
	      position: 'absolute',
	      top: 1,
	      left: 0,
	      width: toggleSize,
	      height: toggleSize,
	      lineHeight: '24px',
	      borderRadius: '50%',
	      backgroundColor: toggle.thumbOffColor
	    },
	    trackWhenSwitched: {
	      backgroundColor: toggle.trackOnColor
	    },
	    thumbWhenSwitched: {
	      backgroundColor: toggle.thumbOnColor,
	      left: '100%'
	    },
	    trackWhenDisabled: {
	      backgroundColor: toggle.trackDisabledColor
	    },
	    thumbWhenDisabled: {
	      backgroundColor: toggle.thumbDisabledColor
	    },
	    label: {
	      color: disabled ? toggle.labelDisabledColor : toggle.labelColor,
	      width: 'calc(100% - ' + (toggleTrackWidth + 10) + 'px)'
	    }
	  };
	
	  (0, _simpleAssign2.default)(styles.track, trackStyle, state.switched && styles.trackWhenSwitched, state.switched && trackSwitchedStyle, disabled && styles.trackWhenDisabled);
	
	  (0, _simpleAssign2.default)(styles.thumb, thumbStyle, state.switched && styles.thumbWhenSwitched, state.switched && thumbSwitchedStyle, disabled && styles.thumbWhenDisabled);
	
	  if (state.switched) {
	    styles.thumb.marginLeft = 0 - styles.thumb.width;
	  }
	
	  (0, _simpleAssign2.default)(styles.icon, iconStyle);
	
	  (0, _simpleAssign2.default)(styles.ripple, rippleStyle);
	
	  (0, _simpleAssign2.default)(styles.label, labelStyle);
	
	  (0, _simpleAssign2.default)(styles.toggleElement, elementStyle);
	
	  return styles;
	}
	
	var Toggle = function (_Component) {
	  (0, _inherits3.default)(Toggle, _Component);
	
	  function Toggle() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Toggle);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Toggle.__proto__ || (0, _getPrototypeOf2.default)(Toggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      switched: false
	    }, _this.handleStateChange = function (newSwitched) {
	      _this.setState({
	        switched: newSwitched
	      });
	    }, _this.handleToggle = function (event, isInputChecked) {
	      if (_this.props.onToggle) {
	        _this.props.onToggle(event, isInputChecked);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(Toggle, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          toggled = _props.toggled,
	          defaultToggled = _props.defaultToggled,
	          valueLink = _props.valueLink;
	
	
	      if (toggled || defaultToggled || valueLink && valueLink.value) {
	        this.setState({
	          switched: true
	        });
	      }
	    }
	  }, {
	    key: 'isToggled',
	    value: function isToggled() {
	      return this.refs.enhancedSwitch.isSwitched();
	    }
	  }, {
	    key: 'setToggled',
	    value: function setToggled(newToggledValue) {
	      this.refs.enhancedSwitch.setSwitched(newToggledValue);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          defaultToggled = _props2.defaultToggled,
	          elementStyle = _props2.elementStyle,
	          onToggle = _props2.onToggle,
	          trackSwitchedStyle = _props2.trackSwitchedStyle,
	          thumbSwitchedStyle = _props2.thumbSwitchedStyle,
	          toggled = _props2.toggled,
	          other = (0, _objectWithoutProperties3.default)(_props2, ['defaultToggled', 'elementStyle', 'onToggle', 'trackSwitchedStyle', 'thumbSwitchedStyle', 'toggled']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      var toggleElement = _react2.default.createElement(
	        'div',
	        { style: prepareStyles((0, _simpleAssign2.default)({}, styles.toggleElement)) },
	        _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, styles.track)) }),
	        _react2.default.createElement(_Paper2.default, { style: styles.thumb, circle: true, zDepth: 1 })
	      );
	
	      var enhancedSwitchProps = {
	        ref: 'enhancedSwitch',
	        inputType: 'checkbox',
	        switchElement: toggleElement,
	        rippleStyle: styles.ripple,
	        rippleColor: styles.ripple.color,
	        iconStyle: styles.icon,
	        trackStyle: styles.track,
	        thumbStyle: styles.thumb,
	        labelStyle: styles.label,
	        switched: this.state.switched,
	        onSwitch: this.handleToggle,
	        onParentShouldUpdate: this.handleStateChange,
	        labelPosition: this.props.labelPosition
	      };
	
	      if (this.props.hasOwnProperty('toggled')) {
	        enhancedSwitchProps.checked = toggled;
	      } else if (this.props.hasOwnProperty('defaultToggled')) {
	        enhancedSwitchProps.defaultChecked = defaultToggled;
	      }
	
	      return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, enhancedSwitchProps));
	    }
	  }]);
	  return Toggle;
	}(_react.Component);
	
	Toggle.defaultProps = {
	  defaultToggled: false,
	  disabled: false,
	  labelPosition: 'left'
	};
	Toggle.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? Toggle.propTypes = {
	  /**
	   * Determines whether the Toggle is initially turned on.
	   * **Warning:** This cannot be used in conjunction with `toggled`.
	   * Decide between using a controlled or uncontrolled input element and remove one of these props.
	   * More info: https://fb.me/react-controlled-components
	   */
	  defaultToggled: _propTypes2.default.bool,
	  /**
	   * Will disable the toggle if true.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * Overrides the inline-styles of the Toggle element.
	   */
	  elementStyle: _propTypes2.default.object,
	  /**
	   * Overrides the inline-styles of the Icon element.
	   */
	  iconStyle: _propTypes2.default.object,
	  /**
	   * Overrides the inline-styles of the input element.
	   */
	  inputStyle: _propTypes2.default.object,
	  /**
	   * Label for toggle.
	   */
	  label: _propTypes2.default.node,
	  /**
	   * Where the label will be placed next to the toggle.
	   */
	  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
	  /**
	   * Overrides the inline-styles of the Toggle element label.
	   */
	  labelStyle: _propTypes2.default.object,
	  /**
	   * Callback function that is fired when the toggle switch is toggled.
	   *
	   * @param {object} event Change event targeting the toggle.
	   * @param {bool} isInputChecked The new value of the toggle.
	   */
	  onToggle: _propTypes2.default.func,
	  /**
	   * Override style of ripple.
	   */
	  rippleStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * Override style for thumb.
	   */
	  thumbStyle: _propTypes2.default.object,
	  /**
	  * Override the inline styles for thumb when the toggle switch is toggled on.
	  */
	  thumbSwitchedStyle: _propTypes2.default.object,
	  /**
	   * Toggled if set to true.
	   */
	  toggled: _propTypes2.default.bool,
	  /**
	   * Override style for track.
	   */
	  trackStyle: _propTypes2.default.object,
	  /**
	  * Override the inline styles for track when the toggle switch is toggled on.
	  */
	  trackSwitchedStyle: _propTypes2.default.object,
	  /**
	   * ValueLink prop for when using controlled toggle.
	   */
	  valueLink: _propTypes2.default.object
	} : void 0;
	exports.default = Toggle;

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactEventListener = __webpack_require__(507);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _keycode = __webpack_require__(510);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _FocusRipple = __webpack_require__(536);
	
	var _FocusRipple2 = _interopRequireDefault(_FocusRipple);
	
	var _TouchRipple = __webpack_require__(541);
	
	var _TouchRipple2 = _interopRequireDefault(_TouchRipple);
	
	var _Paper = __webpack_require__(501);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _warning = __webpack_require__(239);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;
	
	
	  return {
	    root: {
	      cursor: props.disabled ? 'not-allowed' : 'pointer',
	      position: 'relative',
	      overflow: 'visible',
	      display: 'table',
	      height: 'auto',
	      width: '100%'
	    },
	    input: {
	      position: 'absolute',
	      cursor: 'inherit',
	      pointerEvents: 'all',
	      opacity: 0,
	      width: '100%',
	      height: '100%',
	      zIndex: 2,
	      left: 0,
	      boxSizing: 'border-box',
	      padding: 0,
	      margin: 0
	    },
	    controls: {
	      display: 'flex',
	      width: '100%',
	      height: '100%'
	    },
	    label: {
	      float: 'left',
	      position: 'relative',
	      display: 'block',
	      width: 'calc(100% - 60px)',
	      lineHeight: '24px',
	      color: baseTheme.palette.textColor,
	      fontFamily: baseTheme.fontFamily
	    },
	    wrap: {
	      transition: _transitions2.default.easeOut(),
	      float: 'left',
	      position: 'relative',
	      display: 'block',
	      flexShrink: 0,
	      width: 60 - baseTheme.spacing.desktopGutterLess,
	      marginRight: props.labelPosition === 'right' ? baseTheme.spacing.desktopGutterLess : 0,
	      marginLeft: props.labelPosition === 'left' ? baseTheme.spacing.desktopGutterLess : 0
	    },
	    ripple: {
	      color: props.rippleColor || baseTheme.palette.primary1Color,
	      height: '200%',
	      width: '200%',
	      top: -12,
	      left: -12
	    }
	  };
	}
	
	var EnhancedSwitch = function (_Component) {
	  (0, _inherits3.default)(EnhancedSwitch, _Component);
	
	  function EnhancedSwitch() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, EnhancedSwitch);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedSwitch.__proto__ || (0, _getPrototypeOf2.default)(EnhancedSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isKeyboardFocused: false
	    }, _this.handleChange = function (event) {
	      _this.tabPressed = false;
	      _this.setState({
	        isKeyboardFocused: false
	      });
	
	      var isInputChecked = _this.refs.checkbox.checked;
	
	      if (!_this.props.hasOwnProperty('checked') && _this.props.onParentShouldUpdate) {
	        _this.props.onParentShouldUpdate(isInputChecked);
	      }
	
	      if (_this.props.onSwitch) {
	        _this.props.onSwitch(event, isInputChecked);
	      }
	    }, _this.handleKeyDown = function (event) {
	      var code = (0, _keycode2.default)(event);
	
	      if (code === 'tab') {
	        _this.tabPressed = true;
	      }
	      if (_this.state.isKeyboardFocused && code === 'space') {
	        _this.handleChange(event);
	      }
	    }, _this.handleKeyUp = function (event) {
	      if (_this.state.isKeyboardFocused && (0, _keycode2.default)(event) === 'space') {
	        _this.handleChange(event);
	      }
	    }, _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.refs.touchRipple.start(event);
	      }
	    }, _this.handleMouseUp = function () {
	      _this.refs.touchRipple.end();
	    }, _this.handleMouseLeave = function () {
	      _this.refs.touchRipple.end();
	    }, _this.handleTouchStart = function (event) {
	      _this.refs.touchRipple.start(event);
	    }, _this.handleTouchEnd = function () {
	      _this.refs.touchRipple.end();
	    }, _this.handleBlur = function (event) {
	      _this.setState({
	        isKeyboardFocused: false
	      });
	
	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }
	    }, _this.handleFocus = function (event) {
	      // setTimeout is needed becuase the focus event fires first
	      // Wait so that we can capture if this was a keyboard focus
	      // or touch focus
	      setTimeout(function () {
	        if (_this.tabPressed) {
	          _this.setState({
	            isKeyboardFocused: true
	          });
	        }
	      }, 150);
	
	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(EnhancedSwitch, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var inputNode = this.refs.checkbox;
	      if ((!this.props.switched || inputNode.checked !== this.props.switched) && this.props.onParentShouldUpdate) {
	        this.props.onParentShouldUpdate(inputNode.checked);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var hasCheckedProp = nextProps.hasOwnProperty('checked');
	      var hasNewDefaultProp = nextProps.hasOwnProperty('defaultChecked') && nextProps.defaultChecked !== this.props.defaultChecked;
	
	      if (hasCheckedProp || hasNewDefaultProp) {
	        var switched = nextProps.checked || nextProps.defaultChecked || false;
	
	        this.setState({
	          switched: switched
	        });
	
	        if (this.props.onParentShouldUpdate && switched !== this.props.switched) {
	          this.props.onParentShouldUpdate(switched);
	        }
	      }
	    }
	  }, {
	    key: 'isSwitched',
	    value: function isSwitched() {
	      return this.refs.checkbox.checked;
	    }
	
	    // no callback here because there is no event
	
	  }, {
	    key: 'setSwitched',
	    value: function setSwitched(newSwitchedValue) {
	      if (!this.props.hasOwnProperty('checked') || this.props.checked === false) {
	        if (this.props.onParentShouldUpdate) {
	          this.props.onParentShouldUpdate(newSwitchedValue);
	        }
	        this.refs.checkbox.checked = newSwitchedValue;
	      } else {
	         true ? (0, _warning2.default)(false, 'Material-UI: Cannot call set method while checked is defined as a property.') : void 0;
	      }
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.refs.checkbox.value;
	    }
	
	    // Checkbox inputs only use SPACE to change their state. Using ENTER will
	    // update the ui but not the input.
	
	
	    /**
	     * Because both the ripples and the checkbox input cannot share pointer
	     * events, the checkbox input takes control of pointer events and calls
	     * ripple animations manually.
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          name = _props.name,
	          value = _props.value,
	          iconStyle = _props.iconStyle,
	          inputStyle = _props.inputStyle,
	          inputType = _props.inputType,
	          label = _props.label,
	          labelStyle = _props.labelStyle,
	          labelPosition = _props.labelPosition,
	          onSwitch = _props.onSwitch,
	          onBlur = _props.onBlur,
	          onFocus = _props.onFocus,
	          onMouseUp = _props.onMouseUp,
	          onMouseDown = _props.onMouseDown,
	          onMouseLeave = _props.onMouseLeave,
	          onTouchStart = _props.onTouchStart,
	          onTouchEnd = _props.onTouchEnd,
	          onParentShouldUpdate = _props.onParentShouldUpdate,
	          disabled = _props.disabled,
	          disableTouchRipple = _props.disableTouchRipple,
	          disableFocusRipple = _props.disableFocusRipple,
	          className = _props.className,
	          rippleColor = _props.rippleColor,
	          rippleStyle = _props.rippleStyle,
	          style = _props.style,
	          switched = _props.switched,
	          switchElement = _props.switchElement,
	          thumbStyle = _props.thumbStyle,
	          trackStyle = _props.trackStyle,
	          other = (0, _objectWithoutProperties3.default)(_props, ['name', 'value', 'iconStyle', 'inputStyle', 'inputType', 'label', 'labelStyle', 'labelPosition', 'onSwitch', 'onBlur', 'onFocus', 'onMouseUp', 'onMouseDown', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'onParentShouldUpdate', 'disabled', 'disableTouchRipple', 'disableFocusRipple', 'className', 'rippleColor', 'rippleStyle', 'style', 'switched', 'switchElement', 'thumbStyle', 'trackStyle']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var wrapStyles = (0, _simpleAssign2.default)(styles.wrap, iconStyle);
	      var mergedRippleStyle = (0, _simpleAssign2.default)(styles.ripple, rippleStyle);
	
	      if (thumbStyle) {
	        wrapStyles.marginLeft /= 2;
	        wrapStyles.marginRight /= 2;
	      }
	
	      var labelElement = label && _react2.default.createElement(
	        'label',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
	        label
	      );
	
	      var showTouchRipple = !disabled && !disableTouchRipple;
	      var showFocusRipple = !disabled && !disableFocusRipple;
	
	      var touchRipple = _react2.default.createElement(_TouchRipple2.default, {
	        ref: 'touchRipple',
	        key: 'touchRipple',
	        style: mergedRippleStyle,
	        color: mergedRippleStyle.color,
	        muiTheme: this.context.muiTheme,
	        centerRipple: true
	      });
	
	      var focusRipple = _react2.default.createElement(_FocusRipple2.default, {
	        key: 'focusRipple',
	        innerStyle: mergedRippleStyle,
	        color: mergedRippleStyle.color,
	        muiTheme: this.context.muiTheme,
	        show: this.state.isKeyboardFocused
	      });
	
	      var ripples = [showTouchRipple ? touchRipple : null, showFocusRipple ? focusRipple : null];
	
	      var inputElement = _react2.default.createElement('input', (0, _extends3.default)({}, other, {
	        ref: 'checkbox',
	        type: inputType,
	        style: prepareStyles((0, _simpleAssign2.default)(styles.input, inputStyle)),
	        name: name,
	        value: value,
	        disabled: disabled,
	        onBlur: this.handleBlur,
	        onFocus: this.handleFocus,
	        onChange: this.handleChange,
	        onMouseUp: showTouchRipple && this.handleMouseUp,
	        onMouseDown: showTouchRipple && this.handleMouseDown,
	        onMouseLeave: showTouchRipple && this.handleMouseLeave,
	        onTouchStart: showTouchRipple && this.handleTouchStart,
	        onTouchEnd: showTouchRipple && this.handleTouchEnd
	      }));
	
	      // If toggle component (indicated by whether the style includes thumb) manually lay out
	      // elements in order to nest ripple elements
	      var switchOrThumbElement = !thumbStyle ? _react2.default.createElement(
	        'div',
	        { style: prepareStyles(wrapStyles) },
	        switchElement,
	        ripples
	      ) : _react2.default.createElement(
	        'div',
	        { style: prepareStyles(wrapStyles) },
	        _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, trackStyle)) }),
	        _react2.default.createElement(
	          _Paper2.default,
	          { style: thumbStyle, zDepth: 1, circle: true },
	          ' ',
	          ripples,
	          ' '
	        )
	      );
	
	      var elementsInOrder = labelPosition === 'right' ? _react2.default.createElement(
	        'div',
	        { style: styles.controls },
	        switchOrThumbElement,
	        labelElement
	      ) : _react2.default.createElement(
	        'div',
	        { style: styles.controls },
	        labelElement,
	        switchOrThumbElement
	      );
	
	      return _react2.default.createElement(
	        'div',
	        { ref: 'root', className: className, style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	        _react2.default.createElement(_reactEventListener2.default, {
	          target: 'window',
	          onKeyDown: this.handleKeyDown,
	          onKeyUp: this.handleKeyUp
	        }),
	        inputElement,
	        elementsInOrder
	      );
	    }
	  }]);
	  return EnhancedSwitch;
	}(_react.Component);
	
	EnhancedSwitch.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? EnhancedSwitch.propTypes = {
	  checked: _propTypes2.default.bool,
	  className: _propTypes2.default.string,
	  defaultChecked: _propTypes2.default.bool,
	  disableFocusRipple: _propTypes2.default.bool,
	  disableTouchRipple: _propTypes2.default.bool,
	  disabled: _propTypes2.default.bool,
	  iconStyle: _propTypes2.default.object,
	  inputStyle: _propTypes2.default.object,
	  inputType: _propTypes2.default.string.isRequired,
	  label: _propTypes2.default.node,
	  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
	  labelStyle: _propTypes2.default.object,
	  name: _propTypes2.default.string,
	  onBlur: _propTypes2.default.func,
	  onFocus: _propTypes2.default.func,
	  onMouseDown: _propTypes2.default.func,
	  onMouseLeave: _propTypes2.default.func,
	  onMouseUp: _propTypes2.default.func,
	  onParentShouldUpdate: _propTypes2.default.func,
	  onSwitch: _propTypes2.default.func,
	  onTouchEnd: _propTypes2.default.func,
	  onTouchStart: _propTypes2.default.func,
	  rippleColor: _propTypes2.default.string,
	  rippleStyle: _propTypes2.default.object,
	  style: _propTypes2.default.object,
	  switchElement: _propTypes2.default.element.isRequired,
	  switched: _propTypes2.default.bool.isRequired,
	  thumbStyle: _propTypes2.default.object,
	  trackStyle: _propTypes2.default.object,
	  value: _propTypes2.default.any
	} : void 0;
	exports.default = EnhancedSwitch;

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(59);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(537);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _autoPrefix = __webpack_require__(538);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _ScaleIn = __webpack_require__(539);
	
	var _ScaleIn2 = _interopRequireDefault(_ScaleIn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pulsateDuration = 750;
	
	var FocusRipple = function (_Component) {
	  (0, _inherits3.default)(FocusRipple, _Component);
	
	  function FocusRipple() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, FocusRipple);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FocusRipple.__proto__ || (0, _getPrototypeOf2.default)(FocusRipple)).call.apply(_ref, [this].concat(args))), _this), _this.pulsate = function () {
	      var innerCircle = _reactDom2.default.findDOMNode(_this.refs.innerCircle);
	      if (!innerCircle) return;
	
	      var startScale = 'scale(1)';
	      var endScale = 'scale(0.85)';
	      var currentScale = innerCircle.style.transform || startScale;
	      var nextScale = currentScale === startScale ? endScale : startScale;
	
	      _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale);
	      _this.timeout = setTimeout(_this.pulsate, pulsateDuration);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(FocusRipple, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      } else {
	        if (this.timeout) clearTimeout(this.timeout);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timeout);
	    }
	  }, {
	    key: 'getRippleElement',
	    value: function getRippleElement(props) {
	      var color = props.color,
	          innerStyle = props.innerStyle,
	          opacity = props.opacity;
	      var _context$muiTheme = this.context.muiTheme,
	          prepareStyles = _context$muiTheme.prepareStyles,
	          ripple = _context$muiTheme.ripple;
	
	
	      var innerStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        opacity: opacity ? opacity : 0.16,
	        backgroundColor: color || ripple.color,
	        transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
	      }, innerStyle);
	
	      return _react2.default.createElement('div', { ref: 'innerCircle', style: prepareStyles((0, _simpleAssign2.default)({}, innerStyles)) });
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
	      var height = el.offsetHeight;
	      var width = el.offsetWidth;
	      var size = Math.max(height, width);
	
	      var oldTop = 0;
	      // For browsers that don't support endsWith()
	      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
	        oldTop = parseInt(el.style.top);
	      }
	      el.style.height = size + 'px';
	      el.style.top = height / 2 - size / 2 + oldTop + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          show = _props.show,
	          style = _props.style;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({
	        height: '100%',
	        width: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0
	      }, style);
	
	      var ripple = show ? this.getRippleElement(this.props) : null;
	
	      return _react2.default.createElement(
	        _ScaleIn2.default,
	        {
	          maxScale: 0.85,
	          style: mergedRootStyles
	        },
	        ripple
	      );
	    }
	  }]);
	  return FocusRipple;
	}(_react.Component);
	
	FocusRipple.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? FocusRipple.propTypes = {
	  color: _propTypes2.default.string,
	  innerStyle: _propTypes2.default.object,
	  opacity: _propTypes2.default.number,
	  show: _propTypes2.default.bool,
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = FocusRipple;

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _shallowEqual = __webpack_require__(150);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _shallowEqual2.default;

/***/ }),
/* 538 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  set: function set(style, key, value) {
	    style[key] = value;
	  }
	};

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactAddonsTransitionGroup = __webpack_require__(515);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _ScaleInChild = __webpack_require__(540);
	
	var _ScaleInChild2 = _interopRequireDefault(_ScaleInChild);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScaleIn = function (_Component) {
	  (0, _inherits3.default)(ScaleIn, _Component);
	
	  function ScaleIn() {
	    (0, _classCallCheck3.default)(this, ScaleIn);
	    return (0, _possibleConstructorReturn3.default)(this, (ScaleIn.__proto__ || (0, _getPrototypeOf2.default)(ScaleIn)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ScaleIn, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          childStyle = _props.childStyle,
	          enterDelay = _props.enterDelay,
	          maxScale = _props.maxScale,
	          minScale = _props.minScale,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'relative',
	        overflow: 'hidden',
	        height: '100%'
	      }, style);
	
	      var newChildren = _react2.default.Children.map(children, function (child) {
	        return _react2.default.createElement(
	          _ScaleInChild2.default,
	          {
	            key: child.key,
	            enterDelay: enterDelay,
	            maxScale: maxScale,
	            minScale: minScale,
	            style: childStyle
	          },
	          child
	        );
	      });
	
	      return _react2.default.createElement(
	        _reactAddonsTransitionGroup2.default,
	        (0, _extends3.default)({}, other, {
	          style: prepareStyles(mergedRootStyles),
	          component: 'div'
	        }),
	        newChildren
	      );
	    }
	  }]);
	  return ScaleIn;
	}(_react.Component);
	
	ScaleIn.defaultProps = {
	  enterDelay: 0
	};
	ScaleIn.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? ScaleIn.propTypes = {
	  childStyle: _propTypes2.default.object,
	  children: _propTypes2.default.node,
	  enterDelay: _propTypes2.default.number,
	  maxScale: _propTypes2.default.number,
	  minScale: _propTypes2.default.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = ScaleIn;

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(59);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _autoPrefix = __webpack_require__(538);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScaleInChild = function (_Component) {
	  (0, _inherits3.default)(ScaleInChild, _Component);
	
	  function ScaleInChild() {
	    (0, _classCallCheck3.default)(this, ScaleInChild);
	    return (0, _possibleConstructorReturn3.default)(this, (ScaleInChild.__proto__ || (0, _getPrototypeOf2.default)(ScaleInChild)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ScaleInChild, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')');
	
	      this.leaveTimer = setTimeout(callback, 450);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '1';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
	
	      this.enterTimer = setTimeout(callback, this.props.enterDelay);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          enterDelay = _props.enterDelay,
	          maxScale = _props.maxScale,
	          minScale = _props.minScale,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterDelay', 'maxScale', 'minScale', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        top: 0,
	        left: 0,
	        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
	      }, style);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
	        children
	      );
	    }
	  }]);
	  return ScaleInChild;
	}(_react.Component);
	
	ScaleInChild.defaultProps = {
	  enterDelay: 0,
	  maxScale: 1,
	  minScale: 0
	};
	ScaleInChild.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? ScaleInChild.propTypes = {
	  children: _propTypes2.default.node,
	  enterDelay: _propTypes2.default.number,
	  maxScale: _propTypes2.default.number,
	  minScale: _propTypes2.default.number,
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = ScaleInChild;

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(399);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _toArray2 = __webpack_require__(542);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(59);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsTransitionGroup = __webpack_require__(515);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _dom = __webpack_require__(514);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _CircleRipple = __webpack_require__(543);
	
	var _CircleRipple2 = _interopRequireDefault(_CircleRipple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Remove the first element of the array
	var shift = function shift(_ref) {
	  var _ref2 = (0, _toArray3.default)(_ref),
	      newArray = _ref2.slice(1);
	
	  return newArray;
	};
	
	var TouchRipple = function (_Component) {
	  (0, _inherits3.default)(TouchRipple, _Component);
	
	  function TouchRipple(props, context) {
	    (0, _classCallCheck3.default)(this, TouchRipple);
	
	    // Touch start produces a mouse down event for compat reasons. To avoid
	    // showing ripples twice we skip showing a ripple for the first mouse down
	    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
	    // to avoid re-rendering when we change it.
	    var _this = (0, _possibleConstructorReturn3.default)(this, (TouchRipple.__proto__ || (0, _getPrototypeOf2.default)(TouchRipple)).call(this, props, context));
	
	    _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.start(event, false);
	      }
	    };
	
	    _this.handleMouseUp = function () {
	      _this.end();
	    };
	
	    _this.handleMouseLeave = function () {
	      _this.end();
	    };
	
	    _this.handleTouchStart = function (event) {
	      event.stopPropagation();
	      // If the user is swiping (not just tapping), save the position so we can
	      // abort ripples if the user appears to be scrolling.
	      if (_this.props.abortOnScroll && event.touches) {
	        _this.startListeningForScrollAbort(event);
	        _this.startTime = Date.now();
	      }
	      _this.start(event, true);
	    };
	
	    _this.handleTouchEnd = function () {
	      _this.end();
	    };
	
	    _this.handleTouchMove = function (event) {
	      // Stop trying to abort if we're already 300ms into the animation
	      var timeSinceStart = Math.abs(Date.now() - _this.startTime);
	      if (timeSinceStart > 300) {
	        _this.stopListeningForScrollAbort();
	        return;
	      }
	
	      // If the user is scrolling...
	      var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
	      var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
	      // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
	      if (deltaY > 6 || deltaX > 6) {
	        var currentRipples = _this.state.ripples;
	        var ripple = currentRipples[0];
	        // This clone will replace the ripple in ReactTransitionGroup with a
	        // version that will disappear immediately when removed from the DOM
	        var abortedRipple = _react2.default.cloneElement(ripple, { aborted: true });
	        // Remove the old ripple and replace it with the new updated one
	        currentRipples = shift(currentRipples);
	        currentRipples = [].concat((0, _toConsumableArray3.default)(currentRipples), [abortedRipple]);
	        _this.setState({ ripples: currentRipples }, function () {
	          // Call end after we've set the ripple to abort otherwise the setState
	          // in end() merges with this and the ripple abort fails
	          _this.end();
	        });
	      }
	    };
	
	    _this.ignoreNextMouseDown = false;
	
	    _this.state = {
	      // This prop allows us to only render the ReactTransitionGroup
	      // on the first click of the component, making the inital render faster.
	      hasRipples: false,
	      nextKey: 0,
	      ripples: []
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(TouchRipple, [{
	    key: 'start',
	    value: function start(event, isRippleTouchGenerated) {
	      var theme = this.context.muiTheme.ripple;
	
	      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
	        this.ignoreNextMouseDown = false;
	        return;
	      }
	
	      var ripples = this.state.ripples;
	
	      // Add a ripple to the ripples array
	      ripples = [].concat((0, _toConsumableArray3.default)(ripples), [_react2.default.createElement(_CircleRipple2.default, {
	        key: this.state.nextKey,
	        style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
	        color: this.props.color || theme.color,
	        opacity: this.props.opacity,
	        touchGenerated: isRippleTouchGenerated
	      })]);
	
	      this.ignoreNextMouseDown = isRippleTouchGenerated;
	      this.setState({
	        hasRipples: true,
	        nextKey: this.state.nextKey + 1,
	        ripples: ripples
	      });
	    }
	  }, {
	    key: 'end',
	    value: function end() {
	      var currentRipples = this.state.ripples;
	      this.setState({
	        ripples: shift(currentRipples)
	      });
	      if (this.props.abortOnScroll) {
	        this.stopListeningForScrollAbort();
	      }
	    }
	
	    // Check if the user seems to be scrolling and abort the animation if so
	
	  }, {
	    key: 'startListeningForScrollAbort',
	    value: function startListeningForScrollAbort(event) {
	      this.firstTouchY = event.touches[0].clientY;
	      this.firstTouchX = event.touches[0].clientX;
	      // Note that when scolling Chrome throttles this event to every 200ms
	      // Also note we don't listen for scroll events directly as there's no general
	      // way to cover cases like scrolling within containers on the page
	      document.body.addEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'stopListeningForScrollAbort',
	    value: function stopListeningForScrollAbort() {
	      document.body.removeEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'getRippleStyle',
	    value: function getRippleStyle(event) {
	      var el = _reactDom2.default.findDOMNode(this);
	      var elHeight = el.offsetHeight;
	      var elWidth = el.offsetWidth;
	      var offset = _dom2.default.offset(el);
	      var isTouchEvent = event.touches && event.touches.length;
	      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
	      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
	      var pointerX = pageX - offset.left;
	      var pointerY = pageY - offset.top;
	      var topLeftDiag = this.calcDiag(pointerX, pointerY);
	      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
	      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
	      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
	      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	      var rippleSize = rippleRadius * 2;
	      var left = pointerX - rippleRadius;
	      var top = pointerY - rippleRadius;
	
	      return {
	        directionInvariant: true,
	        height: rippleSize,
	        width: rippleSize,
	        top: top,
	        left: left
	      };
	    }
	  }, {
	    key: 'calcDiag',
	    value: function calcDiag(a, b) {
	      return Math.sqrt(a * a + b * b);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          style = _props.style;
	      var _state = this.state,
	          hasRipples = _state.hasRipples,
	          ripples = _state.ripples;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var rippleGroup = void 0;
	
	      if (hasRipples) {
	        var mergedStyles = (0, _simpleAssign2.default)({
	          height: '100%',
	          width: '100%',
	          position: 'absolute',
	          top: 0,
	          left: 0,
	          overflow: 'hidden',
	          pointerEvents: 'none'
	        }, style);
	
	        rippleGroup = _react2.default.createElement(
	          _reactAddonsTransitionGroup2.default,
	          { style: prepareStyles(mergedStyles) },
	          ripples
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        {
	          onMouseUp: this.handleMouseUp,
	          onMouseDown: this.handleMouseDown,
	          onMouseLeave: this.handleMouseLeave,
	          onTouchStart: this.handleTouchStart,
	          onTouchEnd: this.handleTouchEnd
	        },
	        rippleGroup,
	        children
	      );
	    }
	  }]);
	  return TouchRipple;
	}(_react.Component);
	
	TouchRipple.defaultProps = {
	  abortOnScroll: true
	};
	TouchRipple.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? TouchRipple.propTypes = {
	  abortOnScroll: _propTypes2.default.bool,
	  centerRipple: _propTypes2.default.bool,
	  children: _propTypes2.default.node,
	  color: _propTypes2.default.string,
	  opacity: _propTypes2.default.number,
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = TouchRipple;

/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(400);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
	};

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(59);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(537);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _autoPrefix = __webpack_require__(538);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CircleRipple = function (_Component) {
	  (0, _inherits3.default)(CircleRipple, _Component);
	
	  function CircleRipple() {
	    (0, _classCallCheck3.default)(this, CircleRipple);
	    return (0, _possibleConstructorReturn3.default)(this, (CircleRipple.__proto__ || (0, _getPrototypeOf2.default)(CircleRipple)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(CircleRipple, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = 0;
	      // If the animation is aborted, remove from the DOM immediately
	      var removeAfter = this.props.aborted ? 0 : 2000;
	      this.enterTimer = setTimeout(callback, removeAfter);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform');
	      _autoPrefix2.default.set(style, 'transition', transitionValue);
	      _autoPrefix2.default.set(style, 'transform', 'scale(1)');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = this.props.opacity;
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
	      this.leaveTimer = setTimeout(callback, 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          aborted = _props.aborted,
	          color = _props.color,
	          opacity = _props.opacity,
	          style = _props.style,
	          touchGenerated = _props.touchGenerated,
	          other = (0, _objectWithoutProperties3.default)(_props, ['aborted', 'color', 'opacity', 'style', 'touchGenerated']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        backgroundColor: color
	      }, style);
	
	      return _react2.default.createElement('div', (0, _extends3.default)({}, other, { style: prepareStyles(mergedStyles) }));
	    }
	  }]);
	  return CircleRipple;
	}(_react.Component);
	
	CircleRipple.defaultProps = {
	  opacity: 0.1,
	  aborted: false
	};
	CircleRipple.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? CircleRipple.propTypes = {
	  aborted: _propTypes2.default.bool,
	  color: _propTypes2.default.string,
	  opacity: _propTypes2.default.number,
	  style: _propTypes2.default.object,
	  touchGenerated: _propTypes2.default.bool
	} : void 0;
	exports.default = CircleRipple;

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.makeSelectable = exports.ListItem = exports.List = undefined;
	
	var _List2 = __webpack_require__(545);
	
	var _List3 = _interopRequireDefault(_List2);
	
	var _ListItem2 = __webpack_require__(548);
	
	var _ListItem3 = _interopRequireDefault(_ListItem2);
	
	var _makeSelectable2 = __webpack_require__(572);
	
	var _makeSelectable3 = _interopRequireDefault(_makeSelectable2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.List = _List3.default;
	exports.ListItem = _ListItem3.default;
	exports.makeSelectable = _makeSelectable3.default;
	exports.default = _List3.default;

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Subheader = __webpack_require__(546);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var List = function (_Component) {
	  (0, _inherits3.default)(List, _Component);
	
	  function List() {
	    (0, _classCallCheck3.default)(this, List);
	    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(List, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var hasSubheader = false;
	
	      var firstChild = _react.Children.toArray(children)[0];
	      if ((0, _react.isValidElement)(firstChild) && firstChild.type === _Subheader2.default) {
	        hasSubheader = true;
	      }
	
	      var styles = {
	        root: {
	          padding: (hasSubheader ? 0 : 8) + 'px 0px 8px 0px'
	        }
	      };
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        children
	      );
	    }
	  }]);
	  return List;
	}(_react.Component);
	
	List.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? List.propTypes = {
	  /**
	   * These are usually `ListItem`s that are passed to
	   * be part of the list.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = List;

/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Subheader = __webpack_require__(547);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Subheader2.default;

/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Subheader = function Subheader(props, context) {
	  var children = props.children,
	      inset = props.inset,
	      style = props.style,
	      other = (0, _objectWithoutProperties3.default)(props, ['children', 'inset', 'style']);
	  var _context$muiTheme = context.muiTheme,
	      prepareStyles = _context$muiTheme.prepareStyles,
	      subheader = _context$muiTheme.subheader;
	
	
	  var styles = {
	    root: {
	      boxSizing: 'border-box',
	      color: subheader.color,
	      fontSize: 14,
	      fontWeight: subheader.fontWeight,
	      lineHeight: '48px',
	      paddingLeft: inset ? 72 : 16,
	      width: '100%'
	    }
	  };
	
	  return _react2.default.createElement(
	    'div',
	    (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	    children
	  );
	};
	
	Subheader.muiName = 'Subheader';
	
	 true ? Subheader.propTypes = {
	  /**
	   * Node that will be placed inside the `Subheader`.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * If true, the `Subheader` will be indented.
	   */
	  inset: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	
	Subheader.defaultProps = {
	  inset: false
	};
	
	Subheader.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	
	exports.default = Subheader;

/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(59);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(537);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _colorManipulator = __webpack_require__(410);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _EnhancedButton = __webpack_require__(549);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _IconButton = __webpack_require__(553);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _expandLess = __webpack_require__(558);
	
	var _expandLess2 = _interopRequireDefault(_expandLess);
	
	var _expandMore = __webpack_require__(570);
	
	var _expandMore2 = _interopRequireDefault(_expandMore);
	
	var _NestedList = __webpack_require__(571);
	
	var _NestedList2 = _interopRequireDefault(_NestedList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var insetChildren = props.insetChildren,
	      leftAvatar = props.leftAvatar,
	      leftCheckbox = props.leftCheckbox,
	      leftIcon = props.leftIcon,
	      nestedLevel = props.nestedLevel,
	      rightAvatar = props.rightAvatar,
	      rightIcon = props.rightIcon,
	      rightIconButton = props.rightIconButton,
	      rightToggle = props.rightToggle,
	      secondaryText = props.secondaryText,
	      secondaryTextLines = props.secondaryTextLines;
	  var muiTheme = context.muiTheme;
	  var listItem = muiTheme.listItem;
	
	
	  var textColor = muiTheme.baseTheme.palette.textColor;
	  var hoverColor = props.hoverColor || (0, _colorManipulator.fade)(textColor, 0.1);
	  var singleAvatar = !secondaryText && (leftAvatar || rightAvatar);
	  var singleNoAvatar = !secondaryText && !(leftAvatar || rightAvatar);
	  var twoLine = secondaryText && secondaryTextLines === 1;
	  var threeLine = secondaryText && secondaryTextLines > 1;
	
	  var isKeyboardFocused = (props.isKeyboardFocused !== undefined ? props : state).isKeyboardFocused;
	
	  var styles = {
	    root: {
	      backgroundColor: (isKeyboardFocused || state.hovered) && !state.rightIconButtonHovered && !state.rightIconButtonKeyboardFocused ? hoverColor : null,
	      color: textColor,
	      display: 'block',
	      fontSize: 16,
	      lineHeight: '16px',
	      position: 'relative',
	      transition: _transitions2.default.easeOut()
	    },
	
	    // This inner div is needed so that ripples will span the entire container
	    innerDiv: {
	      marginLeft: nestedLevel * listItem.nestedLevelDepth,
	      paddingLeft: leftIcon || leftAvatar || leftCheckbox || insetChildren ? 72 : 16,
	      paddingRight: rightIcon || rightAvatar || rightIconButton ? 56 : rightToggle ? 72 : 16,
	      paddingBottom: singleAvatar ? 20 : 16,
	      paddingTop: singleNoAvatar || threeLine ? 16 : 20,
	      position: 'relative'
	    },
	
	    icons: {
	      height: 24,
	      width: 24,
	      display: 'block',
	      position: 'absolute',
	      top: twoLine ? 12 : singleAvatar ? 4 : 0,
	      margin: 12
	    },
	
	    leftIcon: {
	      left: 4
	    },
	
	    rightIcon: {
	      right: 4
	    },
	
	    avatars: {
	      position: 'absolute',
	      top: singleAvatar ? 8 : 16
	    },
	
	    label: {
	      cursor: 'pointer'
	    },
	
	    leftAvatar: {
	      left: 16
	    },
	
	    rightAvatar: {
	      right: 16
	    },
	
	    leftCheckbox: {
	      position: 'absolute',
	      display: 'block',
	      width: 24,
	      top: twoLine ? 24 : singleAvatar ? 16 : 12,
	      left: 16
	    },
	
	    primaryText: {},
	
	    rightIconButton: {
	      position: 'absolute',
	      display: 'block',
	      top: twoLine ? 12 : singleAvatar ? 4 : 0,
	      right: 4
	    },
	
	    rightToggle: {
	      position: 'absolute',
	      display: 'block',
	      width: 54,
	      top: twoLine ? 25 : singleAvatar ? 17 : 13,
	      right: 8
	    },
	
	    secondaryText: {
	      fontSize: 14,
	      lineHeight: threeLine ? '18px' : '16px',
	      height: threeLine ? 36 : 16,
	      margin: 0,
	      marginTop: 4,
	      color: listItem.secondaryTextColor,
	
	      // needed for 2 and 3 line ellipsis
	      overflow: 'hidden',
	      textOverflow: 'ellipsis',
	      whiteSpace: threeLine ? null : 'nowrap',
	      display: threeLine ? '-webkit-box' : null,
	      WebkitLineClamp: threeLine ? 2 : null,
	      WebkitBoxOrient: threeLine ? 'vertical' : null
	    }
	  };
	
	  return styles;
	}
	
	var ListItem = function (_Component) {
	  (0, _inherits3.default)(ListItem, _Component);
	
	  function ListItem() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, ListItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      isKeyboardFocused: false,
	      open: false,
	      rightIconButtonHovered: false,
	      rightIconButtonKeyboardFocused: false,
	      touch: false
	    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
	      _this.setState({ isKeyboardFocused: isKeyboardFocused });
	      _this.props.onKeyboardFocus(event, isKeyboardFocused);
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.state.touch) _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleNestedListToggle = function (event) {
	      event.stopPropagation();
	
	      if (_this.props.open === null) {
	        _this.setState({ open: !_this.state.open }, function () {
	          _this.props.onNestedListToggle(_this);
	        });
	      } else {
	        // Exposing `this` in the callback is quite a bad API.
	        // I'm doing a one level deep clone to expose a fake state.open.
	        _this.props.onNestedListToggle((0, _extends3.default)({}, _this, {
	          state: {
	            open: !_this.state.open
	          }
	        }));
	      }
	    }, _this.handleRightIconButtonKeyboardFocus = function (event, isKeyboardFocused) {
	      if (isKeyboardFocused) {
	        _this.setState({
	          isKeyboardFocused: false,
	          rightIconButtonKeyboardFocused: isKeyboardFocused
	        });
	      }
	
	      var iconButton = _this.props.rightIconButton;
	
	      if (iconButton && iconButton.props.onKeyboardFocus) iconButton.props.onKeyboardFocus(event, isKeyboardFocused);
	    }, _this.handleRightIconButtonMouseLeave = function (event) {
	      var iconButton = _this.props.rightIconButton;
	      _this.setState({ rightIconButtonHovered: false });
	      if (iconButton && iconButton.props.onMouseLeave) iconButton.props.onMouseLeave(event);
	    }, _this.handleRightIconButtonMouseEnter = function (event) {
	      var iconButton = _this.props.rightIconButton;
	      _this.setState({ rightIconButtonHovered: true });
	      if (iconButton && iconButton.props.onMouseEnter) iconButton.props.onMouseEnter(event);
	    }, _this.handleRightIconButtonMouseUp = function (event) {
	      var iconButton = _this.props.rightIconButton;
	      event.stopPropagation();
	      if (iconButton && iconButton.props.onMouseUp) iconButton.props.onMouseUp(event);
	    }, _this.handleRightIconButtonTouchTap = function (event) {
	      var iconButton = _this.props.rightIconButton;
	
	      // Stop the event from bubbling up to the list-item
	      event.stopPropagation();
	      if (iconButton && iconButton.props.onTouchTap) iconButton.props.onTouchTap(event);
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({ touch: true });
	      _this.props.onTouchStart(event);
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({ touch: true });
	      _this.props.onTouchEnd(event);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(ListItem, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        open: this.props.open === null ? this.props.initiallyOpen === true : this.props.open
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // update the state when the component is controlled.
	      if (nextProps.open !== null) this.setState({ open: nextProps.open });
	      if (nextProps.disabled && this.state.hovered) this.setState({ hovered: false });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	    }
	
	    // This method is needed by the `MenuItem` component.
	
	  }, {
	    key: 'applyFocusState',
	    value: function applyFocusState(focusState) {
	      if (this.button) {
	        var buttonEl = _reactDom2.default.findDOMNode(this.button);
	
	        switch (focusState) {
	          case 'none':
	            buttonEl.blur();
	            break;
	          case 'focused':
	            buttonEl.focus();
	            break;
	          case 'keyboard-focused':
	            this.button.setKeyboardFocus();
	            buttonEl.focus();
	            break;
	        }
	      }
	    }
	  }, {
	    key: 'createDisabledElement',
	    value: function createDisabledElement(styles, contentChildren, additionalProps) {
	      var _props = this.props,
	          innerDivStyle = _props.innerDivStyle,
	          style = _props.style;
	
	
	      var mergedDivStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, style);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, additionalProps, {
	          style: this.context.muiTheme.prepareStyles(mergedDivStyles)
	        }),
	        contentChildren
	      );
	    }
	  }, {
	    key: 'createLabelElement',
	    value: function createLabelElement(styles, contentChildren, additionalProps) {
	      var _props2 = this.props,
	          innerDivStyle = _props2.innerDivStyle,
	          style = _props2.style;
	
	
	      var mergedLabelStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, styles.label, style);
	
	      return _react2.default.createElement(
	        'label',
	        (0, _extends3.default)({}, additionalProps, {
	          style: this.context.muiTheme.prepareStyles(mergedLabelStyles)
	        }),
	        contentChildren
	      );
	    }
	  }, {
	    key: 'createTextElement',
	    value: function createTextElement(styles, data, key) {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      if (_react2.default.isValidElement(data)) {
	        var style = (0, _simpleAssign2.default)({}, styles, data.props.style);
	        if (typeof data.type === 'string') {
	          // if element is a native dom node
	          style = prepareStyles(style);
	        }
	        return _react2.default.cloneElement(data, {
	          key: key,
	          style: style
	        });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { key: key, style: prepareStyles(styles) },
	        data
	      );
	    }
	  }, {
	    key: 'pushElement',
	    value: function pushElement(children, element, baseStyles, additionalProps) {
	      if (element) {
	        var styles = (0, _simpleAssign2.default)({}, baseStyles, element.props.style);
	        children.push(_react2.default.cloneElement(element, (0, _extends3.default)({
	          key: children.length,
	          style: styles
	        }, additionalProps)));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props3 = this.props,
	          autoGenerateNestedIndicator = _props3.autoGenerateNestedIndicator,
	          children = _props3.children,
	          containerElement = _props3.containerElement,
	          disabled = _props3.disabled,
	          disableKeyboardFocus = _props3.disableKeyboardFocus,
	          hoverColor = _props3.hoverColor,
	          initiallyOpen = _props3.initiallyOpen,
	          innerDivStyle = _props3.innerDivStyle,
	          insetChildren = _props3.insetChildren,
	          leftAvatar = _props3.leftAvatar,
	          leftCheckbox = _props3.leftCheckbox,
	          leftIcon = _props3.leftIcon,
	          nestedItems = _props3.nestedItems,
	          nestedLevel = _props3.nestedLevel,
	          nestedListStyle = _props3.nestedListStyle,
	          onKeyboardFocus = _props3.onKeyboardFocus,
	          isKeyboardFocused = _props3.isKeyboardFocused,
	          onMouseEnter = _props3.onMouseEnter,
	          onMouseLeave = _props3.onMouseLeave,
	          onNestedListToggle = _props3.onNestedListToggle,
	          onTouchStart = _props3.onTouchStart,
	          onTouchTap = _props3.onTouchTap,
	          rightAvatar = _props3.rightAvatar,
	          rightIcon = _props3.rightIcon,
	          rightIconButton = _props3.rightIconButton,
	          rightToggle = _props3.rightToggle,
	          primaryText = _props3.primaryText,
	          primaryTogglesNestedList = _props3.primaryTogglesNestedList,
	          secondaryText = _props3.secondaryText,
	          secondaryTextLines = _props3.secondaryTextLines,
	          style = _props3.style,
	          other = (0, _objectWithoutProperties3.default)(_props3, ['autoGenerateNestedIndicator', 'children', 'containerElement', 'disabled', 'disableKeyboardFocus', 'hoverColor', 'initiallyOpen', 'innerDivStyle', 'insetChildren', 'leftAvatar', 'leftCheckbox', 'leftIcon', 'nestedItems', 'nestedLevel', 'nestedListStyle', 'onKeyboardFocus', 'isKeyboardFocused', 'onMouseEnter', 'onMouseLeave', 'onNestedListToggle', 'onTouchStart', 'onTouchTap', 'rightAvatar', 'rightIcon', 'rightIconButton', 'rightToggle', 'primaryText', 'primaryTogglesNestedList', 'secondaryText', 'secondaryTextLines', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var contentChildren = [children];
	
	      if (leftIcon) {
	        var additionalProps = {
	          color: leftIcon.props.color || this.context.muiTheme.listItem.leftIconColor
	        };
	        this.pushElement(contentChildren, leftIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.leftIcon), additionalProps);
	      }
	
	      if (rightIcon) {
	        var _additionalProps = {
	          color: rightIcon.props.color || this.context.muiTheme.listItem.rightIconColor
	        };
	        this.pushElement(contentChildren, rightIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.rightIcon), _additionalProps);
	      }
	
	      if (leftAvatar) {
	        this.pushElement(contentChildren, leftAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.leftAvatar));
	      }
	
	      if (rightAvatar) {
	        this.pushElement(contentChildren, rightAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.rightAvatar));
	      }
	
	      if (leftCheckbox) {
	        this.pushElement(contentChildren, leftCheckbox, (0, _simpleAssign2.default)({}, styles.leftCheckbox));
	      }
	
	      // RightIconButtonElement
	      var hasNestListItems = nestedItems.length;
	      var hasRightElement = rightAvatar || rightIcon || rightIconButton || rightToggle;
	      var needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !hasRightElement;
	
	      if (rightIconButton || needsNestedIndicator) {
	        var rightIconButtonElement = rightIconButton;
	        var rightIconButtonHandlers = {
	          onKeyboardFocus: this.handleRightIconButtonKeyboardFocus,
	          onMouseEnter: this.handleRightIconButtonMouseEnter,
	          onMouseLeave: this.handleRightIconButtonMouseLeave,
	          onTouchTap: this.handleRightIconButtonTouchTap,
	          onMouseDown: this.handleRightIconButtonMouseUp,
	          onMouseUp: this.handleRightIconButtonMouseUp
	        };
	
	        // Create a nested list indicator icon if we don't have an icon on the right
	        if (needsNestedIndicator) {
	          rightIconButtonElement = this.state.open ? _react2.default.createElement(
	            _IconButton2.default,
	            null,
	            _react2.default.createElement(_expandLess2.default, null)
	          ) : _react2.default.createElement(
	            _IconButton2.default,
	            null,
	            _react2.default.createElement(_expandMore2.default, null)
	          );
	          rightIconButtonHandlers.onTouchTap = this.handleNestedListToggle;
	        }
	
	        this.pushElement(contentChildren, rightIconButtonElement, (0, _simpleAssign2.default)({}, styles.rightIconButton), rightIconButtonHandlers);
	      }
	
	      if (rightToggle) {
	        this.pushElement(contentChildren, rightToggle, (0, _simpleAssign2.default)({}, styles.rightToggle));
	      }
	
	      if (primaryText) {
	        var primaryTextElement = this.createTextElement(styles.primaryText, primaryText, 'primaryText');
	        contentChildren.push(primaryTextElement);
	      }
	
	      if (secondaryText) {
	        var secondaryTextElement = this.createTextElement(styles.secondaryText, secondaryText, 'secondaryText');
	        contentChildren.push(secondaryTextElement);
	      }
	
	      var nestedList = nestedItems.length ? _react2.default.createElement(
	        _NestedList2.default,
	        { nestedLevel: nestedLevel, open: this.state.open, style: nestedListStyle },
	        nestedItems
	      ) : undefined;
	
	      var simpleLabel = !primaryTogglesNestedList && (leftCheckbox || rightToggle);
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        simpleLabel ? this.createLabelElement(styles, contentChildren, other) : disabled ? this.createDisabledElement(styles, contentChildren, other) : _react2.default.createElement(
	          _EnhancedButton2.default,
	          (0, _extends3.default)({
	            containerElement: containerElement
	          }, other, {
	            disableKeyboardFocus: disableKeyboardFocus || this.state.rightIconButtonKeyboardFocused,
	            onKeyboardFocus: this.handleKeyboardFocus,
	            onMouseLeave: this.handleMouseLeave,
	            onMouseEnter: this.handleMouseEnter,
	            onTouchStart: this.handleTouchStart,
	            onTouchEnd: this.handleTouchEnd,
	            onTouchTap: primaryTogglesNestedList ? this.handleNestedListToggle : onTouchTap,
	            ref: function ref(node) {
	              return _this2.button = node;
	            },
	            style: (0, _simpleAssign2.default)({}, styles.root, style)
	          }),
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles((0, _simpleAssign2.default)(styles.innerDiv, innerDivStyle)) },
	            contentChildren
	          )
	        ),
	        nestedList
	      );
	    }
	  }]);
	  return ListItem;
	}(_react.Component);
	
	ListItem.muiName = 'ListItem';
	ListItem.defaultProps = {
	  autoGenerateNestedIndicator: true,
	  containerElement: 'span',
	  disableKeyboardFocus: false,
	  disabled: false,
	  initiallyOpen: false,
	  insetChildren: false,
	  nestedItems: [],
	  nestedLevel: 0,
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onNestedListToggle: function onNestedListToggle() {},
	  onTouchEnd: function onTouchEnd() {},
	  onTouchStart: function onTouchStart() {},
	  open: null,
	  primaryTogglesNestedList: false,
	  secondaryTextLines: 1
	};
	ListItem.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? ListItem.propTypes = {
	  /**
	   * If true, generate a nested-list-indicator icon when nested list
	   * items are detected. Note that an indicator will not be created
	   * if a `rightIcon` or `rightIconButton` has been provided to
	   * the element.
	   */
	  autoGenerateNestedIndicator: _propTypes2.default.bool,
	  /**
	   * Children passed into the `ListItem`.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The element to use as the container for the ListItem. Either a string to
	   * use a DOM element or a ReactElement. This is useful for wrapping the
	   * ListItem in a custom Link component. If a ReactElement is given, ensure
	   * that it passes all of its given props through to the underlying DOM
	   * element and renders its children prop for proper integration.
	   */
	  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	  /**
	   * If true, the element will not be able to be focused by the keyboard.
	   */
	  disableKeyboardFocus: _propTypes2.default.bool,
	  /**
	   * If true, the element will not be clickable
	   * and will not display hover effects.
	   * This is automatically disabled if either `leftCheckbox`
	   * or `rightToggle` is set.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	  * Override the hover background color.
	  */
	  hoverColor: _propTypes2.default.string,
	  /**
	   * If true, the nested `ListItem`s are initially displayed.
	   */
	  initiallyOpen: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the inner div element.
	   */
	  innerDivStyle: _propTypes2.default.object,
	  /**
	   * If true, the children will be indented by 72px.
	   * This is useful if there is no left avatar or left icon.
	   */
	  insetChildren: _propTypes2.default.bool,
	  /**
	   * Use to control if the list item should render as keyboard focused.  If
	   * undefined (default), this will be automatically managed.  If provided,
	   * it will change the components style.  Note that this will not change the
	   * actual focus - and should only be used when you want to simulate
	   * keyboard focus (eg. in a rich text input autocomplete).
	   */
	  isKeyboardFocused: _propTypes2.default.bool,
	  /**
	   * This is the `Avatar` element to be displayed on the left side.
	   */
	  leftAvatar: _propTypes2.default.element,
	  /**
	   * This is the `Checkbox` element to be displayed on the left side.
	   */
	  leftCheckbox: _propTypes2.default.element,
	  /**
	   * This is the `SvgIcon` or `FontIcon` to be displayed on the left side.
	   */
	  leftIcon: _propTypes2.default.element,
	  /**
	   * An array of `ListItem`s to nest underneath the current `ListItem`.
	   */
	  nestedItems: _propTypes2.default.arrayOf(_propTypes2.default.element),
	  /**
	   * Controls how deep a `ListItem` appears.
	   * This property is automatically managed, so modify at your own risk.
	   */
	  nestedLevel: _propTypes2.default.number,
	  /**
	   * Override the inline-styles of the nested items' `NestedList`.
	   */
	  nestedListStyle: _propTypes2.default.object,
	  /**
	   * Callback function fired when the `ListItem` is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the `ListItem`.
	   * @param {boolean} isKeyboardFocused If true, the `ListItem` is focused.
	   */
	  onKeyboardFocus: _propTypes2.default.func,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /**
	   * Callbak function fired when the `ListItem` toggles its nested list.
	   *
	   * @param {object} listItem The `ListItem`.
	   */
	  onNestedListToggle: _propTypes2.default.func,
	  /** @ignore */
	  onTouchEnd: _propTypes2.default.func,
	  /** @ignore */
	  onTouchStart: _propTypes2.default.func,
	  /** @ignore */
	  onTouchTap: _propTypes2.default.func,
	  /**
	   * Control toggle state of nested list.
	   */
	  open: _propTypes2.default.bool,
	  /**
	   * This is the block element that contains the primary text.
	   * If a string is passed in, a div tag will be rendered.
	   */
	  primaryText: _propTypes2.default.node,
	  /**
	   * If true, clicking or tapping the primary text of the `ListItem`
	   * toggles the nested list.
	   */
	  primaryTogglesNestedList: _propTypes2.default.bool,
	  /**
	   * This is the `Avatar` element to be displayed on the right side.
	   */
	  rightAvatar: _propTypes2.default.element,
	  /**
	   * This is the `SvgIcon` or `FontIcon` to be displayed on the right side.
	   */
	  rightIcon: _propTypes2.default.element,
	  /**
	   * This is the `IconButton` to be displayed on the right side.
	   * Hovering over this button will remove the `ListItem` hover.
	   * Also, clicking on this button will not trigger a
	   * ripple on the `ListItem`; the event will be stopped and prevented
	   * from bubbling up to cause a `ListItem` click.
	   */
	  rightIconButton: _propTypes2.default.element,
	  /**
	   * This is the `Toggle` element to display on the right side.
	   */
	  rightToggle: _propTypes2.default.element,
	  /**
	   * This is the block element that contains the secondary text.
	   * If a string is passed in, a div tag will be rendered.
	   */
	  secondaryText: _propTypes2.default.node,
	  /**
	   * Can be 1 or 2. This is the number of secondary
	   * text lines before ellipsis will show.
	   */
	  secondaryTextLines: _propTypes2.default.oneOf([1, 2]),
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = ListItem;

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _childUtils = __webpack_require__(550);
	
	var _events = __webpack_require__(552);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _keycode = __webpack_require__(510);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _FocusRipple = __webpack_require__(536);
	
	var _FocusRipple2 = _interopRequireDefault(_FocusRipple);
	
	var _TouchRipple = __webpack_require__(541);
	
	var _TouchRipple2 = _interopRequireDefault(_TouchRipple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styleInjected = false;
	var listening = false;
	var tabPressed = false;
	
	function injectStyle() {
	  if (!styleInjected) {
	    // Remove inner padding and border in Firefox 4+.
	    var style = document.createElement('style');
	    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';
	
	    document.body.appendChild(style);
	    styleInjected = true;
	  }
	}
	
	function listenForTabPresses() {
	  if (!listening) {
	    _events2.default.on(window, 'keydown', function (event) {
	      tabPressed = (0, _keycode2.default)(event) === 'tab';
	    });
	    listening = true;
	  }
	}
	
	var EnhancedButton = function (_Component) {
	  (0, _inherits3.default)(EnhancedButton, _Component);
	
	  function EnhancedButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, EnhancedButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedButton.__proto__ || (0, _getPrototypeOf2.default)(EnhancedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isKeyboardFocused: false
	    }, _this.handleKeyDown = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'enter' && _this.state.isKeyboardFocused) {
	          _this.handleTouchTap(event);
	        }
	        if ((0, _keycode2.default)(event) === 'esc' && _this.state.isKeyboardFocused) {
	          _this.removeKeyboardFocus(event);
	        }
	      }
	      _this.props.onKeyDown(event);
	    }, _this.handleKeyUp = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'space' && _this.state.isKeyboardFocused) {
	          _this.handleTouchTap(event);
	        }
	      }
	      _this.props.onKeyUp(event);
	    }, _this.handleBlur = function (event) {
	      _this.cancelFocusTimeout();
	      _this.removeKeyboardFocus(event);
	      _this.props.onBlur(event);
	    }, _this.handleFocus = function (event) {
	      if (event) event.persist();
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        // setTimeout is needed because the focus event fires first
	        // Wait so that we can capture if this was a keyboard focus
	        // or touch focus
	        _this.focusTimeout = setTimeout(function () {
	          if (tabPressed) {
	            _this.setKeyboardFocus(event);
	            tabPressed = false;
	          }
	        }, 150);
	
	        _this.props.onFocus(event);
	      }
	    }, _this.handleClick = function (event) {
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.props.onClick(event);
	      }
	    }, _this.handleTouchTap = function (event) {
	      _this.cancelFocusTimeout();
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.removeKeyboardFocus(event);
	        _this.props.onTouchTap(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(EnhancedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          disabled = _props.disabled,
	          disableKeyboardFocus = _props.disableKeyboardFocus,
	          keyboardFocused = _props.keyboardFocused;
	
	      if (!disabled && keyboardFocused && !disableKeyboardFocus) {
	        this.setState({ isKeyboardFocused: true });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      injectStyle();
	      listenForTabPresses();
	      if (this.state.isKeyboardFocused) {
	        this.button.focus();
	        this.props.onKeyboardFocus(null, true);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        if (nextProps.onKeyboardFocus) {
	          nextProps.onKeyboardFocus(null, false);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.focusTimeout) {
	        clearTimeout(this.focusTimeout);
	      }
	    }
	  }, {
	    key: 'isKeyboardFocused',
	    value: function isKeyboardFocused() {
	      return this.state.isKeyboardFocused;
	    }
	  }, {
	    key: 'removeKeyboardFocus',
	    value: function removeKeyboardFocus(event) {
	      if (this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        this.props.onKeyboardFocus(event, false);
	      }
	    }
	  }, {
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus(event) {
	      if (!this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: true });
	        this.props.onKeyboardFocus(event, true);
	      }
	    }
	  }, {
	    key: 'cancelFocusTimeout',
	    value: function cancelFocusTimeout() {
	      if (this.focusTimeout) {
	        clearTimeout(this.focusTimeout);
	        this.focusTimeout = null;
	      }
	    }
	  }, {
	    key: 'createButtonChildren',
	    value: function createButtonChildren() {
	      var _props2 = this.props,
	          centerRipple = _props2.centerRipple,
	          children = _props2.children,
	          disabled = _props2.disabled,
	          disableFocusRipple = _props2.disableFocusRipple,
	          disableKeyboardFocus = _props2.disableKeyboardFocus,
	          disableTouchRipple = _props2.disableTouchRipple,
	          focusRippleColor = _props2.focusRippleColor,
	          focusRippleOpacity = _props2.focusRippleOpacity,
	          touchRippleColor = _props2.touchRippleColor,
	          touchRippleOpacity = _props2.touchRippleOpacity;
	      var isKeyboardFocused = this.state.isKeyboardFocused;
	
	      // Focus Ripple
	
	      var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_FocusRipple2.default, {
	        color: focusRippleColor,
	        opacity: focusRippleOpacity,
	        show: isKeyboardFocused
	      }) : undefined;
	
	      // Touch Ripple
	      var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
	        _TouchRipple2.default,
	        {
	          centerRipple: centerRipple,
	          color: touchRippleColor,
	          opacity: touchRippleOpacity
	        },
	        children
	      ) : undefined;
	
	      return (0, _childUtils.createChildFragment)({
	        focusRipple: focusRipple,
	        touchRipple: touchRipple,
	        children: touchRipple ? undefined : children
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props3 = this.props,
	          centerRipple = _props3.centerRipple,
	          children = _props3.children,
	          containerElement = _props3.containerElement,
	          disabled = _props3.disabled,
	          disableFocusRipple = _props3.disableFocusRipple,
	          disableKeyboardFocus = _props3.disableKeyboardFocus,
	          disableTouchRipple = _props3.disableTouchRipple,
	          focusRippleColor = _props3.focusRippleColor,
	          focusRippleOpacity = _props3.focusRippleOpacity,
	          href = _props3.href,
	          keyboardFocused = _props3.keyboardFocused,
	          touchRippleColor = _props3.touchRippleColor,
	          touchRippleOpacity = _props3.touchRippleOpacity,
	          onBlur = _props3.onBlur,
	          onClick = _props3.onClick,
	          onFocus = _props3.onFocus,
	          onKeyUp = _props3.onKeyUp,
	          onKeyDown = _props3.onKeyDown,
	          onKeyboardFocus = _props3.onKeyboardFocus,
	          onTouchTap = _props3.onTouchTap,
	          style = _props3.style,
	          tabIndex = _props3.tabIndex,
	          type = _props3.type,
	          other = (0, _objectWithoutProperties3.default)(_props3, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'href', 'keyboardFocused', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onClick', 'onFocus', 'onKeyUp', 'onKeyDown', 'onKeyboardFocus', 'onTouchTap', 'style', 'tabIndex', 'type']);
	      var _context$muiTheme = this.context.muiTheme,
	          prepareStyles = _context$muiTheme.prepareStyles,
	          enhancedButton = _context$muiTheme.enhancedButton;
	
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        border: 10,
	        boxSizing: 'border-box',
	        display: 'inline-block',
	        fontFamily: this.context.muiTheme.baseTheme.fontFamily,
	        WebkitTapHighlightColor: enhancedButton.tapHighlightColor, // Remove mobile color flashing (deprecated)
	        cursor: disabled ? 'default' : 'pointer',
	        textDecoration: 'none',
	        margin: 0,
	        padding: 0,
	        outline: 'none',
	        fontSize: 'inherit',
	        fontWeight: 'inherit',
	        position: 'relative', // This is needed so that ripples do not bleed past border radius.
	        verticalAlign: href ? 'middle' : null,
	        zIndex: 1 }, style);
	
	      // Passing both background:none & backgroundColor can break due to object iteration order
	      if (!mergedStyles.backgroundColor && !mergedStyles.background) {
	        mergedStyles.background = 'none';
	      }
	
	      if (disabled && href) {
	        return _react2.default.createElement(
	          'span',
	          (0, _extends3.default)({}, other, {
	            style: mergedStyles
	          }),
	          children
	        );
	      }
	
	      var buttonProps = (0, _extends3.default)({}, other, {
	        style: prepareStyles(mergedStyles),
	        ref: function ref(node) {
	          return _this2.button = node;
	        },
	        disabled: disabled,
	        href: href,
	        onBlur: this.handleBlur,
	        onClick: this.handleClick,
	        onFocus: this.handleFocus,
	        onKeyUp: this.handleKeyUp,
	        onKeyDown: this.handleKeyDown,
	        onTouchTap: this.handleTouchTap,
	        tabIndex: disabled || disableKeyboardFocus ? -1 : tabIndex
	      });
	
	      var buttonChildren = this.createButtonChildren();
	
	      if (_react2.default.isValidElement(containerElement)) {
	        return _react2.default.cloneElement(containerElement, buttonProps, buttonChildren);
	      }
	
	      if (!href && containerElement === 'button') {
	        buttonProps.type = type;
	      }
	
	      return _react2.default.createElement(href ? 'a' : containerElement, buttonProps, buttonChildren);
	    }
	  }]);
	  return EnhancedButton;
	}(_react.Component);
	
	EnhancedButton.defaultProps = {
	  containerElement: 'button',
	  onBlur: function onBlur() {},
	  onClick: function onClick() {},
	  onFocus: function onFocus() {},
	  onKeyDown: function onKeyDown() {},
	  onKeyUp: function onKeyUp() {},
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onTouchTap: function onTouchTap() {},
	  tabIndex: 0,
	  type: 'button'
	};
	EnhancedButton.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? EnhancedButton.propTypes = {
	  centerRipple: _propTypes2.default.bool,
	  children: _propTypes2.default.node,
	  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	  disableFocusRipple: _propTypes2.default.bool,
	  disableKeyboardFocus: _propTypes2.default.bool,
	  disableTouchRipple: _propTypes2.default.bool,
	  disabled: _propTypes2.default.bool,
	  focusRippleColor: _propTypes2.default.string,
	  focusRippleOpacity: _propTypes2.default.number,
	  href: _propTypes2.default.string,
	  keyboardFocused: _propTypes2.default.bool,
	  onBlur: _propTypes2.default.func,
	  onClick: _propTypes2.default.func,
	  onFocus: _propTypes2.default.func,
	  onKeyDown: _propTypes2.default.func,
	  onKeyUp: _propTypes2.default.func,
	  onKeyboardFocus: _propTypes2.default.func,
	  onTouchTap: _propTypes2.default.func,
	  style: _propTypes2.default.object,
	  tabIndex: _propTypes2.default.number,
	  touchRippleColor: _propTypes2.default.string,
	  touchRippleOpacity: _propTypes2.default.number,
	  type: _propTypes2.default.string
	} : void 0;
	exports.default = EnhancedButton;

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createChildFragment = createChildFragment;
	exports.extendChildren = extendChildren;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCreateFragment = __webpack_require__(551);
	
	var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createChildFragment(fragments) {
	  var newFragments = {};
	  var validChildrenCount = 0;
	  var firstKey = void 0;
	
	  // Only create non-empty key fragments
	  for (var key in fragments) {
	    var currentChild = fragments[key];
	
	    if (currentChild) {
	      if (validChildrenCount === 0) firstKey = key;
	      newFragments[key] = currentChild;
	      validChildrenCount++;
	    }
	  }
	
	  if (validChildrenCount === 0) return undefined;
	  if (validChildrenCount === 1) return newFragments[firstKey];
	  return (0, _reactAddonsCreateFragment2.default)(newFragments);
	}
	
	function extendChildren(children, extendedProps, extendedChildren) {
	  return _react2.default.Children.map(children, function (child) {
	    if (!_react2.default.isValidElement(child)) {
	      return child;
	    }
	
	    var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;
	
	    var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;
	
	    return _react2.default.cloneElement(child, newProps, newChildren);
	  });
	}

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var React = __webpack_require__(24);
	
	var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	  Symbol.for &&
	  Symbol.for('react.element')) ||
	  0xeac7;
	
	var emptyFunction = __webpack_require__(34);
	var invariant = __webpack_require__(30);
	var warning = __webpack_require__(33);
	
	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';
	
	var didWarnAboutMaps = false;
	
	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}
	
	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function(match) {
	    return escaperLookup[match];
	  });
	
	  return '$' + escapedString;
	}
	
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}
	
	function traverseAllChildrenImpl(
	  children,
	  nameSoFar,
	  callback,
	  traverseContext
	) {
	  var type = typeof children;
	
	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }
	
	  if (
	    children === null ||
	    type === 'string' ||
	    type === 'number' ||
	    // The following is inlined from ReactElement. This means we can optimize
	    // some checks. React Fiber also inlines this logic for similar purposes.
	    (type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE)
	  ) {
	    callback(
	      traverseContext,
	      children,
	      // If it's the only child, treat the name as if it was wrapped in an array
	      // so that it's consistent if the number of children grows.
	      nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar
	    );
	    return 1;
	  }
	
	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
	
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(
	        child,
	        nextName,
	        callback,
	        traverseContext
	      );
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      if (true) {
	        // Warn about using Maps as children
	        if (iteratorFn === children.entries) {
	          warning(
	            didWarnAboutMaps,
	            'Using Maps as children is unsupported and will likely yield ' +
	              'unexpected results. Convert it to a sequence/iterable of keyed ' +
	              'ReactElements instead.'
	          );
	          didWarnAboutMaps = true;
	        }
	      }
	
	      var iterator = iteratorFn.call(children);
	      var step;
	      var ii = 0;
	      while (!(step = iterator.next()).done) {
	        child = step.value;
	        nextName = nextNamePrefix + getComponentKey(child, ii++);
	        subtreeCount += traverseAllChildrenImpl(
	          child,
	          nextName,
	          callback,
	          traverseContext
	        );
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (true) {
	        addendum = ' If you meant to render a collection of children, use an array ' +
	          'instead or wrap the object using createFragment(object) from the ' +
	          'React add-ons.';
	      }
	      var childrenString = '' + children;
	      invariant(
	        false,
	        'Objects are not valid as a React child (found: %s).%s',
	        childrenString === '[object Object]'
	          ? 'object with keys {' + Object.keys(children).join(', ') + '}'
	          : childrenString,
	        addendum
	      );
	    }
	  }
	
	  return subtreeCount;
	}
	
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }
	
	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}
	
	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}
	
	function cloneAndReplaceKey(oldElement, newKey) {
	  return React.cloneElement(
	    oldElement,
	    { key: newKey },
	    oldElement.props !== undefined
	      ? oldElement.props.children
	      : undefined
	  );
	};
	
	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;
	
	var oneArgumentPooler = function(copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};
	
	var addPoolingTo = function addPoolingTo(
	  CopyConstructor,
	  pooler
	) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};
	
	var standardReleaser = function standardReleaser(instance) {
	  var Klass = this;
	  invariant(
	    instance instanceof Klass,
	    'Trying to release an instance into a pool of a different type.'
	  );
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};
	
	var fourArgumentPooler = function fourArgumentPooler(a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};
	
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function() {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	addPoolingTo(MapBookKeeping, fourArgumentPooler);
	
	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;
	
	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(
	      mappedChild,
	      result,
	      childKey,
	      emptyFunction.thatReturnsArgument
	    );
	  } else if (mappedChild != null) {
	    if (React.isValidElement(mappedChild)) {
	      mappedChild = cloneAndReplaceKey(
	        mappedChild,
	        // Keep both the (mapped) and old keys if they differ, just as
	        // traverseAllChildren used to do for objects as children
	        keyPrefix +
	          (mappedChild.key && (!child || child.key !== mappedChild.key)
	            ? escapeUserProvidedKey(mappedChild.key) + '/'
	            : '') +
	          childKey
	      );
	    }
	    result.push(mappedChild);
	  }
	}
	
	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(
	    array,
	    escapedPrefix,
	    func,
	    context
	  );
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}
	
	var numericPropertyRegex = /^\d+$/;
	
	var warnedAboutNumeric = false;
	
	function createReactFragment(object) {
	  if (typeof object !== 'object' || !object || Array.isArray(object)) {
	    warning(
	      false,
	      'React.addons.createFragment only accepts a single object. Got: %s',
	      object
	    );
	    return object;
	  }
	  if (React.isValidElement(object)) {
	    warning(
	      false,
	      'React.addons.createFragment does not accept a ReactElement ' +
	        'without a wrapper object.'
	    );
	    return object;
	  }
	
	  invariant(
	    object.nodeType !== 1,
	    'React.addons.createFragment(...): Encountered an invalid child; DOM ' +
	      'elements are not valid children of React components.'
	  );
	
	  var result = [];
	
	  for (var key in object) {
	    if (true) {
	      if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
	        warning(
	          false,
	          'React.addons.createFragment(...): Child objects should have ' +
	            'non-numeric keys so ordering is preserved.'
	        );
	        warnedAboutNumeric = true;
	      }
	    }
	    mapIntoWithKeyPrefixInternal(
	      object[key],
	      result,
	      key,
	      emptyFunction.thatReturnsArgument
	    );
	  }
	
	  return result;
	}
	
	module.exports = createReactFragment;


/***/ }),
/* 552 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  once: function once(el, type, callback) {
	    var typeArray = type ? type.split(' ') : [];
	    var recursiveFunction = function recursiveFunction(event) {
	      event.target.removeEventListener(event.type, recursiveFunction);
	      return callback(event);
	    };
	
	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(el, typeArray[i], recursiveFunction);
	    }
	  },
	  on: function on(el, type, callback) {
	    if (el.addEventListener) {
	      el.addEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.attachEvent('on' + type, function () {
	        callback.call(el);
	      });
	    }
	  },
	  off: function off(el, type, callback) {
	    if (el.removeEventListener) {
	      el.removeEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.detachEvent('on' + type, callback);
	    }
	  },
	  isKeyboard: function isKeyboard(event) {
	    return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
	  }
	};

/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _IconButton = __webpack_require__(554);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _IconButton2.default;

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _propTypes3 = __webpack_require__(503);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	var _EnhancedButton = __webpack_require__(549);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _FontIcon = __webpack_require__(555);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _Tooltip = __webpack_require__(557);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _childUtils = __webpack_require__(550);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;
	
	
	  return {
	    root: {
	      boxSizing: 'border-box',
	      overflow: 'visible',
	      transition: _transitions2.default.easeOut(),
	      padding: baseTheme.spacing.iconSize / 2,
	      width: baseTheme.spacing.iconSize * 2,
	      height: baseTheme.spacing.iconSize * 2,
	      fontSize: 0
	    },
	    tooltip: {
	      boxSizing: 'border-box'
	    },
	    disabled: {
	      color: baseTheme.palette.disabledColor,
	      fill: baseTheme.palette.disabledColor,
	      cursor: 'default'
	    }
	  };
	}
	
	var IconButton = function (_Component) {
	  (0, _inherits3.default)(IconButton, _Component);
	
	  function IconButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, IconButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconButton.__proto__ || (0, _getPrototypeOf2.default)(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      isKeyboardFocused: false,
	      // Not to be confonded with the touch property.
	      // This state is to determined if it's a mobile device.
	      touch: false,
	      tooltipShown: false
	    }, _this.handleBlur = function (event) {
	      _this.hideTooltip();
	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }
	    }, _this.handleFocus = function (event) {
	      _this.showTooltip();
	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.button.isKeyboardFocused()) {
	        _this.hideTooltip();
	      }
	      _this.setState({ hovered: false });
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseOut = function (event) {
	      if (_this.props.disabled) _this.hideTooltip();
	      if (_this.props.onMouseOut) _this.props.onMouseOut(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.showTooltip();
	
	      // Cancel hover styles for touch devices
	      if (!_this.state.touch) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({ touch: true });
	
	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
	      var _this$props = _this.props,
	          disabled = _this$props.disabled,
	          onFocus = _this$props.onFocus,
	          onBlur = _this$props.onBlur,
	          onKeyboardFocus = _this$props.onKeyboardFocus;
	
	      if (isKeyboardFocused && !disabled) {
	        _this.showTooltip();
	        if (onFocus) {
	          onFocus(event);
	        }
	      } else {
	        _this.hideTooltip();
	        if (onBlur) {
	          onBlur(event);
	        }
	      }
	
	      _this.setState({ isKeyboardFocused: isKeyboardFocused });
	      if (onKeyboardFocus) {
	        onKeyboardFocus(event, isKeyboardFocused);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(IconButton, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.disabled) {
	        this.setState({ hovered: false });
	      }
	    }
	  }, {
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus() {
	      this.button.setKeyboardFocus();
	    }
	  }, {
	    key: 'showTooltip',
	    value: function showTooltip() {
	      if (this.props.tooltip) {
	        this.setState({ tooltipShown: true });
	      }
	    }
	  }, {
	    key: 'hideTooltip',
	    value: function hideTooltip() {
	      if (this.props.tooltip) this.setState({ tooltipShown: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          disabled = _props.disabled,
	          hoveredStyle = _props.hoveredStyle,
	          disableTouchRipple = _props.disableTouchRipple,
	          children = _props.children,
	          iconClassName = _props.iconClassName,
	          style = _props.style,
	          tooltip = _props.tooltip,
	          tooltipPositionProp = _props.tooltipPosition,
	          tooltipStyles = _props.tooltipStyles,
	          touch = _props.touch,
	          iconStyle = _props.iconStyle,
	          other = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'hoveredStyle', 'disableTouchRipple', 'children', 'iconClassName', 'style', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch', 'iconStyle']);
	
	      var fonticon = void 0;
	
	      var styles = getStyles(this.props, this.context);
	      var tooltipPosition = tooltipPositionProp.split('-');
	
	      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;
	
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style, hovered ? hoveredStyle : {});
	
	      var tooltipElement = tooltip ? _react2.default.createElement(_Tooltip2.default, {
	        label: tooltip,
	        show: this.state.tooltipShown,
	        touch: touch,
	        style: (0, _simpleAssign2.default)(styles.tooltip, tooltipStyles),
	        verticalPosition: tooltipPosition[0],
	        horizontalPosition: tooltipPosition[1]
	      }) : null;
	
	      if (iconClassName) {
	        var iconHoverColor = iconStyle.iconHoverColor,
	            iconStyleFontIcon = (0, _objectWithoutProperties3.default)(iconStyle, ['iconHoverColor']);
	
	
	        fonticon = _react2.default.createElement(
	          _FontIcon2.default,
	          {
	            className: iconClassName,
	            hoverColor: disabled ? null : iconHoverColor,
	            style: (0, _simpleAssign2.default)({}, disabled && styles.disabled, iconStyleFontIcon),
	            color: this.context.muiTheme.baseTheme.palette.textColor
	          },
	          children
	        );
	      }
	
	      var childrenStyle = disabled ? (0, _simpleAssign2.default)({}, iconStyle, styles.disabled) : iconStyle;
	
	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        (0, _extends3.default)({
	          ref: function ref(_ref2) {
	            return _this2.button = _ref2;
	          }
	        }, other, {
	          centerRipple: true,
	          disabled: disabled,
	          onTouchStart: this.handleTouchStart,
	          style: mergedRootStyles,
	          disableTouchRipple: disableTouchRipple,
	          onBlur: this.handleBlur,
	          onFocus: this.handleFocus,
	          onMouseLeave: this.handleMouseLeave,
	          onMouseEnter: this.handleMouseEnter,
	          onMouseOut: this.handleMouseOut,
	          onKeyboardFocus: this.handleKeyboardFocus
	        }),
	        tooltipElement,
	        fonticon,
	        (0, _childUtils.extendChildren)(children, {
	          style: childrenStyle
	        })
	      );
	    }
	  }]);
	  return IconButton;
	}(_react.Component);
	
	IconButton.muiName = 'IconButton';
	IconButton.defaultProps = {
	  disabled: false,
	  disableTouchRipple: false,
	  iconStyle: {},
	  tooltipPosition: 'bottom-center',
	  touch: false
	};
	IconButton.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? IconButton.propTypes = {
	  /**
	   * Can be used to pass a `FontIcon` element as the icon for the button.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * If true, the element's ripple effect will be disabled.
	   */
	  disableTouchRipple: _propTypes2.default.bool,
	  /**
	   * If true, the element will be disabled.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element when the component is hovered.
	   */
	  hoveredStyle: _propTypes2.default.object,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _propTypes2.default.string,
	  /**
	   * The CSS class name of the icon. Used for setting the icon with a stylesheet.
	   */
	  iconClassName: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the icon element.
	   * Note: you can specify iconHoverColor as a String inside this object.
	   */
	  iconStyle: _propTypes2.default.object,
	  /** @ignore */
	  onBlur: _propTypes2.default.func,
	  /** @ignore */
	  onFocus: _propTypes2.default.func,
	  /**
	   * Callback function fired when the element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the element.
	   * @param {boolean} keyboardFocused Indicates whether the element is focused.
	   */
	  onKeyboardFocus: _propTypes2.default.func,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /** @ignore */
	  onMouseOut: _propTypes2.default.func,
	  /** @ignore */
	  onTouchStart: _propTypes2.default.func,
	  /**
	   * Callback function fired when the button is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the button.
	   */
	  onTouchTap: _propTypes2.default.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * The text to supply to the element's tooltip.
	   */
	  tooltip: _propTypes2.default.node,
	  /**
	   * The vertical and horizontal positions, respectively, of the element's tooltip.
	   * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
	   * "bottom-left", and "top-left".
	   */
	  tooltipPosition: _propTypes4.default.cornersAndCenter,
	  /**
	   * Override the inline-styles of the tooltip element.
	   */
	  tooltipStyles: _propTypes2.default.object,
	  /**
	   * If true, increase the tooltip element's size. Useful for increasing tooltip
	   * readability on mobile devices.
	   */
	  touch: _propTypes2.default.bool
	} : void 0;
	exports.default = IconButton;

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _FontIcon = __webpack_require__(556);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _FontIcon2.default;

/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var color = props.color,
	      hoverColor = props.hoverColor;
	  var baseTheme = context.muiTheme.baseTheme;
	
	  var offColor = color || baseTheme.palette.textColor;
	  var onColor = hoverColor || offColor;
	
	  return {
	    root: {
	      color: state.hovered ? onColor : offColor,
	      position: 'relative',
	      fontSize: baseTheme.spacing.iconSize,
	      display: 'inline-block',
	      userSelect: 'none',
	      transition: _transitions2.default.easeOut()
	    }
	  };
	}
	
	var FontIcon = function (_Component) {
	  (0, _inherits3.default)(FontIcon, _Component);
	
	  function FontIcon() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, FontIcon);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FontIcon.__proto__ || (0, _getPrototypeOf2.default)(FontIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      // hover is needed only when a hoverColor is defined
	      if (_this.props.hoverColor !== undefined) {
	        _this.setState({ hovered: false });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      // hover is needed only when a hoverColor is defined
	      if (_this.props.hoverColor !== undefined) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(FontIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          hoverColor = _props.hoverColor,
	          onMouseLeave = _props.onMouseLeave,
	          onMouseEnter = _props.onMouseEnter,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement('span', (0, _extends3.default)({}, other, {
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
	      }));
	    }
	  }]);
	  return FontIcon;
	}(_react.Component);
	
	FontIcon.muiName = 'FontIcon';
	FontIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {}
	};
	FontIcon.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? FontIcon.propTypes = {
	  /**
	   * This is the font color of the font icon. If not specified,
	   * this component will default to muiTheme.palette.textColor.
	   */
	  color: _propTypes2.default.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _propTypes2.default.string,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = FontIcon;

/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var verticalPosition = props.verticalPosition;
	  var horizontalPosition = props.horizontalPosition;
	  var touchMarginOffset = props.touch ? 10 : 0;
	  var touchOffsetTop = props.touch ? -20 : -10;
	  var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;
	
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      zIndex = _context$muiTheme.zIndex,
	      tooltip = _context$muiTheme.tooltip,
	      borderRadius = _context$muiTheme.borderRadius;
	
	
	  var styles = {
	    root: {
	      position: 'absolute',
	      fontFamily: baseTheme.fontFamily,
	      fontSize: '10px',
	      lineHeight: '22px',
	      padding: '0 8px',
	      zIndex: zIndex.tooltip,
	      color: tooltip.color,
	      overflow: 'hidden',
	      top: -10000,
	      borderRadius: borderRadius,
	      userSelect: 'none',
	      opacity: 0,
	      right: horizontalPosition === 'left' ? 12 : null,
	      left: horizontalPosition === 'center' ? (state.offsetWidth - 48) / 2 * -1 : horizontalPosition === 'right' ? 12 : null,
	      transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	    },
	    label: {
	      position: 'relative',
	      whiteSpace: 'nowrap'
	    },
	    ripple: {
	      position: 'absolute',
	      left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
	      top: verticalPosition === 'bottom' ? 0 : '100%',
	      transform: 'translate(-50%, -50%)',
	      borderRadius: '50%',
	      backgroundColor: 'transparent',
	      transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ', ' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	    },
	    rootWhenShown: {
	      top: verticalPosition === 'top' ? touchOffsetTop : 36,
	      opacity: 0.9,
	      transform: 'translate(0px, ' + offset + 'px)',
	      transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	    },
	    rootWhenTouched: {
	      fontSize: '14px',
	      lineHeight: '32px',
	      padding: '0 16px'
	    },
	    rippleWhenShown: {
	      backgroundColor: tooltip.rippleBackgroundColor,
	      transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	    }
	  };
	
	  return styles;
	}
	
	var Tooltip = function (_Component) {
	  (0, _inherits3.default)(Tooltip, _Component);
	
	  function Tooltip() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Tooltip);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      offsetWidth: null
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(Tooltip, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setRippleSize();
	      this.setTooltipPosition();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.setTooltipPosition();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setRippleSize();
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var ripple = this.refs.ripple;
	      var tooltip = this.refs.tooltip;
	      var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
	      var tooltipHeight = parseInt(tooltip.offsetHeight, 10);
	
	      var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
	      if (this.props.show) {
	        ripple.style.height = rippleDiameter + 'px';
	        ripple.style.width = rippleDiameter + 'px';
	      } else {
	        ripple.style.width = '0px';
	        ripple.style.height = '0px';
	      }
	    }
	  }, {
	    key: 'setTooltipPosition',
	    value: function setTooltipPosition() {
	      this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          horizontalPosition = _props.horizontalPosition,
	          label = _props.label,
	          show = _props.show,
	          touch = _props.touch,
	          verticalPosition = _props.verticalPosition,
	          other = (0, _objectWithoutProperties3.default)(_props, ['horizontalPosition', 'label', 'show', 'touch', 'verticalPosition']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, {
	          ref: 'tooltip',
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style))
	        }),
	        _react2.default.createElement('div', {
	          ref: 'ripple',
	          style: prepareStyles((0, _simpleAssign2.default)(styles.ripple, this.props.show && styles.rippleWhenShown))
	        }),
	        _react2.default.createElement(
	          'span',
	          { style: prepareStyles(styles.label) },
	          label
	        )
	      );
	    }
	  }]);
	  return Tooltip;
	}(_react.Component);
	
	Tooltip.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? Tooltip.propTypes = {
	  /**
	   * The css class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  horizontalPosition: _propTypes2.default.oneOf(['left', 'right', 'center']),
	  label: _propTypes2.default.node.isRequired,
	  show: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  touch: _propTypes2.default.bool,
	  verticalPosition: _propTypes2.default.oneOf(['top', 'bottom'])
	} : void 0;
	exports.default = Tooltip;

/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(559);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(568);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationExpandLess = function NavigationExpandLess(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' })
	  );
	};
	NavigationExpandLess = (0, _pure2.default)(NavigationExpandLess);
	NavigationExpandLess.displayName = 'NavigationExpandLess';
	NavigationExpandLess.muiName = 'SvgIcon';
	
	exports.default = NavigationExpandLess;

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _shouldUpdate = __webpack_require__(560);
	
	var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);
	
	var _shallowEqual = __webpack_require__(537);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _createHelper = __webpack_require__(561);
	
	var _createHelper2 = _interopRequireDefault(_createHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pure = (0, _shouldUpdate2.default)(function (props, nextProps) {
	  return !(0, _shallowEqual2.default)(props, nextProps);
	});
	
	exports.default = (0, _createHelper2.default)(pure, 'pure', true, true);

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(24);
	
	var _createHelper = __webpack_require__(561);
	
	var _createHelper2 = _interopRequireDefault(_createHelper);
	
	var _createEagerFactory = __webpack_require__(564);
	
	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var shouldUpdate = function shouldUpdate(test) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    return function (_Component) {
	      _inherits(_class, _Component);
	
	      function _class() {
	        _classCallCheck(this, _class);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      _class.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return test(this.props, nextProps);
	      };
	
	      _class.prototype.render = function render() {
	        return factory(this.props);
	      };
	
	      return _class;
	    }(_react.Component);
	  };
	};
	
	exports.default = (0, _createHelper2.default)(shouldUpdate, 'shouldUpdate');

/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _wrapDisplayName = __webpack_require__(562);
	
	var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createHelper = function createHelper(func, helperName) {
	  var setDisplayName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  var noArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	
	  if (("development") !== 'production' && setDisplayName) {
	    if (noArgs) {
	      return function (BaseComponent) {
	        var Component = func(BaseComponent);
	        Component.displayName = (0, _wrapDisplayName2.default)(BaseComponent, helperName);
	        return Component;
	      };
	    }
	
	    return function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return function (BaseComponent) {
	        var Component = func.apply(undefined, args)(BaseComponent);
	        Component.displayName = (0, _wrapDisplayName2.default)(BaseComponent, helperName);
	        return Component;
	      };
	    };
	  }
	
	  return func;
	};
	
	exports.default = createHelper;

/***/ }),
/* 562 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _getDisplayName = __webpack_require__(563);
	
	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
	  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
	};
	
	exports.default = wrapDisplayName;

/***/ }),
/* 563 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var getDisplayName = function getDisplayName(Component) {
	  if (typeof Component === 'string') {
	    return Component;
	  }
	
	  if (!Component) {
	    return undefined;
	  }
	
	  return Component.displayName || Component.name || 'Component';
	};
	
	exports.default = getDisplayName;

/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEagerElementUtil = __webpack_require__(565);
	
	var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);
	
	var _isReferentiallyTransparentFunctionComponent = __webpack_require__(566);
	
	var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createFactory = function createFactory(type) {
	  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
	  return function (p, c) {
	    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
	  };
	};
	
	exports.default = createFactory;

/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
	  if (!hasKey && isReferentiallyTransparent) {
	    if (children) {
	      return type(_extends({}, props, { children: children }));
	    }
	    return type(props);
	  }
	
	  var Component = type;
	
	  if (children) {
	    return _react2.default.createElement(
	      Component,
	      props,
	      children
	    );
	  }
	
	  return _react2.default.createElement(Component, props);
	};
	
	exports.default = createEagerElementUtil;

/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _isClassComponent = __webpack_require__(567);
	
	var _isClassComponent2 = _interopRequireDefault(_isClassComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
	  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && (("development") === 'production' || !Component.propTypes));
	};
	
	exports.default = isReferentiallyTransparentFunctionComponent;

/***/ }),
/* 567 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var isClassComponent = function isClassComponent(Component) {
	  return Boolean(Component && Component.prototype && typeof Component.prototype.isReactComponent === 'object');
	};
	
	exports.default = isClassComponent;

/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _SvgIcon = __webpack_require__(569);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _SvgIcon2.default;

/***/ }),
/* 569 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SvgIcon = function (_Component) {
	  (0, _inherits3.default)(SvgIcon, _Component);
	
	  function SvgIcon() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, SvgIcon);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(SvgIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          color = _props.color,
	          hoverColor = _props.hoverColor,
	          onMouseEnter = _props.onMouseEnter,
	          onMouseLeave = _props.onMouseLeave,
	          style = _props.style,
	          viewBox = _props.viewBox,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
	      var _context$muiTheme = this.context.muiTheme,
	          svgIcon = _context$muiTheme.svgIcon,
	          prepareStyles = _context$muiTheme.prepareStyles;
	
	
	      var offColor = color ? color : 'currentColor';
	      var onColor = hoverColor ? hoverColor : offColor;
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        display: 'inline-block',
	        color: svgIcon.color,
	        fill: this.state.hovered ? onColor : offColor,
	        height: 24,
	        width: 24,
	        userSelect: 'none',
	        transition: _transitions2.default.easeOut()
	      }, style);
	
	      return _react2.default.createElement(
	        'svg',
	        (0, _extends3.default)({}, other, {
	          onMouseEnter: this.handleMouseEnter,
	          onMouseLeave: this.handleMouseLeave,
	          style: prepareStyles(mergedStyles),
	          viewBox: viewBox
	        }),
	        children
	      );
	    }
	  }]);
	  return SvgIcon;
	}(_react.Component);
	
	SvgIcon.muiName = 'SvgIcon';
	SvgIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  viewBox: '0 0 24 24'
	};
	SvgIcon.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? SvgIcon.propTypes = {
	  /**
	   * Elements passed into the SVG Icon.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * This is the fill color of the svg icon.
	   * If not specified, this component will default
	   * to muiTheme.palette.textColor.
	   */
	  color: _propTypes2.default.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _propTypes2.default.string,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * Allows you to redefine what the coordinates
	   * without units mean inside an svg element. For example,
	   * if the SVG element is 500 (width) by 200 (height), and you
	   * pass viewBox="0 0 50 20", this means that the coordinates inside
	   * the svg will go from the top left corner (0,0) to bottom right (50,20)
	   * and each unit will be worth 10px.
	   */
	  viewBox: _propTypes2.default.string
	} : void 0;
	exports.default = SvgIcon;

/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(559);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(568);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationExpandMore = function NavigationExpandMore(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' })
	  );
	};
	NavigationExpandMore = (0, _pure2.default)(NavigationExpandMore);
	NavigationExpandMore.displayName = 'NavigationExpandMore';
	NavigationExpandMore.muiName = 'SvgIcon';
	
	exports.default = NavigationExpandMore;

/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _List = __webpack_require__(545);
	
	var _List2 = _interopRequireDefault(_List);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NestedList = function NestedList(props) {
	  var children = props.children,
	      open = props.open,
	      nestedLevel = props.nestedLevel,
	      style = props.style;
	
	
	  if (!open) {
	    return null;
	  }
	
	  return _react2.default.createElement(
	    _List2.default,
	    { style: style },
	    _react.Children.map(children, function (child) {
	      return (0, _react.isValidElement)(child) ? (0, _react.cloneElement)(child, {
	        nestedLevel: nestedLevel + 1
	      }) : child;
	    })
	  );
	};
	
	 true ? NestedList.propTypes = {
	  children: _propTypes2.default.node,
	  nestedLevel: _propTypes2.default.number.isRequired,
	  open: _propTypes2.default.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	
	exports.default = NestedList;

/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.makeSelectable = undefined;
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _colorManipulator = __webpack_require__(410);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var makeSelectable = function makeSelectable(MyComponent) {
	  var _class, _temp2;
	
	  return _temp2 = _class = function (_Component) {
	    (0, _inherits3.default)(_class, _Component);
	
	    function _class() {
	      var _ref;
	
	      var _temp, _this, _ret;
	
	      (0, _classCallCheck3.default)(this, _class);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.hasSelectedDescendant = function (previousValue, child) {
	        if (_react2.default.isValidElement(child) && child.props.nestedItems && child.props.nestedItems.length > 0) {
	          return child.props.nestedItems.reduce(_this.hasSelectedDescendant, previousValue);
	        }
	        return previousValue || _this.isChildSelected(child, _this.props);
	      }, _this.handleItemTouchTap = function (event, item) {
	        var itemValue = item.props.value;
	
	        if (itemValue !== _this.props.value) {
	          if (_this.props.onChange) {
	            _this.props.onChange(event, itemValue);
	          }
	        }
	      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }
	
	    (0, _createClass3.default)(_class, [{
	      key: 'extendChild',
	      value: function extendChild(child, styles, selectedItemStyle) {
	        var _this2 = this;
	
	        if (child && child.type && child.type.muiName === 'ListItem') {
	          var selected = this.isChildSelected(child, this.props);
	          var selectedChildrenStyles = void 0;
	          if (selected) {
	            selectedChildrenStyles = (0, _simpleAssign2.default)({}, styles, selectedItemStyle);
	          }
	
	          var mergedChildrenStyles = (0, _simpleAssign2.default)({}, child.props.style, selectedChildrenStyles);
	
	          this.keyIndex += 1;
	
	          return _react2.default.cloneElement(child, {
	            onTouchTap: function onTouchTap(event) {
	              _this2.handleItemTouchTap(event, child);
	              if (child.props.onTouchTap) {
	                child.props.onTouchTap(event);
	              }
	            },
	            key: this.keyIndex,
	            style: mergedChildrenStyles,
	            nestedItems: child.props.nestedItems.map(function (child) {
	              return _this2.extendChild(child, styles, selectedItemStyle);
	            }),
	            initiallyOpen: this.isInitiallyOpen(child)
	          });
	        } else {
	          return child;
	        }
	      }
	    }, {
	      key: 'isInitiallyOpen',
	      value: function isInitiallyOpen(child) {
	        if (child.props.initiallyOpen) {
	          return child.props.initiallyOpen;
	        }
	        return this.hasSelectedDescendant(false, child);
	      }
	    }, {
	      key: 'isChildSelected',
	      value: function isChildSelected(child, props) {
	        return props.value === child.props.value;
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _this3 = this;
	
	        var _props = this.props,
	            children = _props.children,
	            selectedItemStyle = _props.selectedItemStyle,
	            other = (0, _objectWithoutProperties3.default)(_props, ['children', 'selectedItemStyle']);
	
	
	        this.keyIndex = 0;
	        var styles = {};
	
	        if (!selectedItemStyle) {
	          var textColor = this.context.muiTheme.baseTheme.palette.textColor;
	          styles.backgroundColor = (0, _colorManipulator.fade)(textColor, 0.2);
	        }
	
	        return _react2.default.createElement(
	          MyComponent,
	          (0, _extends3.default)({}, other, this.state),
	          _react.Children.map(children, function (child) {
	            return _this3.extendChild(child, styles, selectedItemStyle);
	          })
	        );
	      }
	    }]);
	    return _class;
	  }(_react.Component), _class.propTypes = {
	    children: _propTypes2.default.node,
	    onChange: _propTypes2.default.func,
	    selectedItemStyle: _propTypes2.default.object,
	    value: _propTypes2.default.any
	  }, _class.contextTypes = {
	    muiTheme: _propTypes2.default.object.isRequired
	  }, _temp2;
	};
	
	exports.makeSelectable = makeSelectable;
	exports.default = makeSelectable;

/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(559);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(568);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationMoreVert = function NavigationMoreVert(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
	  );
	};
	NavigationMoreVert = (0, _pure2.default)(NavigationMoreVert);
	NavigationMoreVert.displayName = 'NavigationMoreVert';
	NavigationMoreVert.muiName = 'SvgIcon';
	
	exports.default = NavigationMoreVert;

/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.MenuItem = exports.IconMenu = undefined;
	
	var _IconMenu2 = __webpack_require__(575);
	
	var _IconMenu3 = _interopRequireDefault(_IconMenu2);
	
	var _MenuItem2 = __webpack_require__(583);
	
	var _MenuItem3 = _interopRequireDefault(_MenuItem2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.IconMenu = _IconMenu3.default;
	exports.MenuItem = _MenuItem3.default;
	exports.default = _IconMenu3.default;

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(59);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _events = __webpack_require__(552);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _propTypes3 = __webpack_require__(503);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	var _Menu = __webpack_require__(576);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Popover = __webpack_require__(579);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _warning = __webpack_require__(239);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IconMenu = function (_Component) {
	  (0, _inherits3.default)(IconMenu, _Component);
	
	  function IconMenu() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, IconMenu);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconMenu.__proto__ || (0, _getPrototypeOf2.default)(IconMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      menuInitiallyKeyboardFocused: false,
	      open: false
	    }, _this.handleItemTouchTap = function (event, child) {
	      if (_this.props.touchTapCloseDelay !== 0 && !child.props.hasOwnProperty('menuItems')) {
	        var isKeyboard = _events2.default.isKeyboard(event);
	        _this.timerCloseId = setTimeout(function () {
	          _this.close(isKeyboard ? 'enter' : 'itemTap', isKeyboard);
	        }, _this.props.touchTapCloseDelay);
	      }
	
	      _this.props.onItemTouchTap(event, child);
	    }, _this.handleRequestClose = function (reason) {
	      _this.close(reason);
	    }, _this.handleEscKeyDownMenu = function (event) {
	      _this.close('escape', event);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(IconMenu, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.open != null) {
	        this.setState({
	          open: nextProps.open,
	          anchorEl: this.refs.iconMenuContainer
	        });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timerCloseId);
	    }
	  }, {
	    key: 'isOpen',
	    value: function isOpen() {
	      return this.state.open;
	    }
	  }, {
	    key: 'close',
	    value: function close(reason, isKeyboard) {
	      var _this2 = this;
	
	      if (!this.state.open) {
	        return;
	      }
	
	      if (this.props.open !== null) {
	        this.props.onRequestChange(false, reason);
	      } else {
	        this.setState({ open: false }, function () {
	          // Set focus on the icon button when the menu close
	          if (isKeyboard) {
	            var iconButton = _this2.refs.iconButton;
	            _reactDom2.default.findDOMNode(iconButton).focus();
	            iconButton.setKeyboardFocus();
	          }
	        });
	      }
	    }
	  }, {
	    key: 'open',
	    value: function open(reason, event) {
	      if (this.props.open !== null) {
	        this.props.onRequestChange(true, reason);
	
	        return this.setState({
	          menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
	          anchorEl: event.currentTarget
	        });
	      }
	
	      this.setState({
	        open: true,
	        menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
	        anchorEl: event.currentTarget
	      });
	
	      event.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _props = this.props,
	          anchorOrigin = _props.anchorOrigin,
	          className = _props.className,
	          animated = _props.animated,
	          animation = _props.animation,
	          iconButtonElement = _props.iconButtonElement,
	          iconStyle = _props.iconStyle,
	          onItemTouchTap = _props.onItemTouchTap,
	          onKeyboardFocus = _props.onKeyboardFocus,
	          onMouseDown = _props.onMouseDown,
	          onMouseLeave = _props.onMouseLeave,
	          onMouseEnter = _props.onMouseEnter,
	          onMouseUp = _props.onMouseUp,
	          onRequestChange = _props.onRequestChange,
	          onTouchTap = _props.onTouchTap,
	          listStyle = _props.listStyle,
	          menuStyle = _props.menuStyle,
	          style = _props.style,
	          targetOrigin = _props.targetOrigin,
	          touchTapCloseDelay = _props.touchTapCloseDelay,
	          useLayerForClickAway = _props.useLayerForClickAway,
	          other = (0, _objectWithoutProperties3.default)(_props, ['anchorOrigin', 'className', 'animated', 'animation', 'iconButtonElement', 'iconStyle', 'onItemTouchTap', 'onKeyboardFocus', 'onMouseDown', 'onMouseLeave', 'onMouseEnter', 'onMouseUp', 'onRequestChange', 'onTouchTap', 'listStyle', 'menuStyle', 'style', 'targetOrigin', 'touchTapCloseDelay', 'useLayerForClickAway']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	      var _state = this.state,
	          open = _state.open,
	          anchorEl = _state.anchorEl;
	
	
	      var styles = {
	        root: {
	          display: 'inline-block',
	          position: 'relative'
	        },
	        menu: {
	          position: 'relative'
	        }
	      };
	
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var mergedMenuStyles = (0, _simpleAssign2.default)(styles.menu, menuStyle);
	
	       true ? (0, _warning2.default)(iconButtonElement.type.muiName !== 'SvgIcon', 'Material-UI: You shoud not provide an <SvgIcon /> to the \'iconButtonElement\' property of <IconMenu />.\nYou should wrapped it with an <IconButton />.') : void 0;
	
	      var iconButtonProps = {
	        onKeyboardFocus: onKeyboardFocus,
	        onTouchTap: function onTouchTap(event) {
	          _this3.open(_events2.default.isKeyboard(event) ? 'keyboard' : 'iconTap', event);
	          if (iconButtonElement.props.onTouchTap) {
	            iconButtonElement.props.onTouchTap(event);
	          }
	        },
	        ref: 'iconButton'
	      };
	      if (iconStyle || iconButtonElement.props.iconStyle) {
	        iconButtonProps.iconStyle = iconStyle ? (0, _simpleAssign2.default)({}, iconStyle, iconButtonElement.props.iconStyle) : iconButtonElement.props.iconStyle;
	      }
	      var iconButton = _react2.default.cloneElement(iconButtonElement, iconButtonProps);
	
	      var menu = _react2.default.createElement(
	        _Menu2.default,
	        (0, _extends3.default)({}, other, {
	          initiallyKeyboardFocused: this.state.menuInitiallyKeyboardFocused,
	          onEscKeyDown: this.handleEscKeyDownMenu,
	          onItemTouchTap: this.handleItemTouchTap,
	          style: mergedMenuStyles,
	          listStyle: listStyle
	        }),
	        this.props.children
	      );
	
	      return _react2.default.createElement(
	        'div',
	        {
	          ref: 'iconMenuContainer',
	          className: className,
	          onMouseDown: onMouseDown,
	          onMouseLeave: onMouseLeave,
	          onMouseEnter: onMouseEnter,
	          onMouseUp: onMouseUp,
	          onTouchTap: onTouchTap,
	          style: prepareStyles(mergedRootStyles)
	        },
	        iconButton,
	        _react2.default.createElement(
	          _Popover2.default,
	          {
	            anchorOrigin: anchorOrigin,
	            targetOrigin: targetOrigin,
	            open: open,
	            anchorEl: anchorEl,
	            childContextTypes: this.constructor.childContextTypes,
	            useLayerForClickAway: useLayerForClickAway,
	            onRequestClose: this.handleRequestClose,
	            animated: animated,
	            animation: animation,
	            context: this.context
	          },
	          menu
	        )
	      );
	    }
	  }]);
	  return IconMenu;
	}(_react.Component);
	
	IconMenu.muiName = 'IconMenu';
	IconMenu.defaultProps = {
	  anchorOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  },
	  animated: true,
	  multiple: false,
	  open: null,
	  onItemTouchTap: function onItemTouchTap() {},
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseDown: function onMouseDown() {},
	  onMouseLeave: function onMouseLeave() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseUp: function onMouseUp() {},
	  onRequestChange: function onRequestChange() {},
	  onTouchTap: function onTouchTap() {},
	  targetOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  },
	  touchTapCloseDelay: 200,
	  useLayerForClickAway: false
	};
	IconMenu.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? IconMenu.propTypes = {
	  /**
	   * This is the point on the icon where the menu
	   * `targetOrigin` will attach.
	   * Options:
	   * vertical: [top, center, bottom]
	   * horizontal: [left, middle, right].
	   */
	  anchorOrigin: _propTypes4.default.origin,
	  /**
	   * If true, the popover will apply transitions when
	   * it gets added to the DOM.
	   */
	  animated: _propTypes2.default.bool,
	  /**
	   * Override the default animation component used.
	   */
	  animation: _propTypes2.default.func,
	  /**
	   * Should be used to pass `MenuItem` components.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * This is the `IconButton` to render. This button will open the menu.
	   */
	  iconButtonElement: _propTypes2.default.element.isRequired,
	  /**
	   * Override the inline-styles of the underlying icon element.
	   */
	  iconStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the underlying `List` element.
	   */
	  listStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the menu element.
	   */
	  menuStyle: _propTypes2.default.object,
	  /**
	   * If true, the value can an be array and allow the menu to be a multi-select.
	   */
	  multiple: _propTypes2.default.bool,
	  /**
	   * Callback function fired when a menu item is selected with a touch-tap.
	   *
	   * @param {object} event TouchTap event targeting the selected menu item element.
	   * @param {object} child The selected element.
	   */
	  onItemTouchTap: _propTypes2.default.func,
	  /**
	   * Callback function fired when the `IconButton` element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the `IconButton` element.
	   * @param {boolean} keyboardFocused If true, the `IconButton` element is focused.
	   */
	  onKeyboardFocus: _propTypes2.default.func,
	  /** @ignore */
	  onMouseDown: _propTypes2.default.func,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /** @ignore */
	  onMouseUp: _propTypes2.default.func,
	  /**
	   * Callback function fired when the `open` state of the menu is requested to be changed.
	   *
	   * @param {boolean} open If true, the menu was requested to be opened.
	   * @param {string} reason The reason for the open or close request. Possible values are
	   * 'keyboard' and 'iconTap' for open requests; 'enter', 'escape', 'itemTap', and 'clickAway'
	   * for close requests.
	   */
	  onRequestChange: _propTypes2.default.func,
	  /**
	   * Callback function fired when the `IconButton` element is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the `IconButton` element.
	   */
	  onTouchTap: _propTypes2.default.func,
	  /**
	   * If true, the `IconMenu` is opened.
	   */
	  open: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * This is the point on the menu which will stick to the menu
	   * origin.
	   * Options:
	   * vertical: [top, center, bottom]
	   * horizontal: [left, middle, right].
	   */
	  targetOrigin: _propTypes4.default.origin,
	  /**
	   * Sets the delay in milliseconds before closing the
	   * menu when an item is clicked.
	   * If set to 0 then the auto close functionality
	   * will be disabled.
	   */
	  touchTapCloseDelay: _propTypes2.default.number,
	  /**
	   * If true, the popover will render on top of an invisible
	   * layer, which will prevent clicks to the underlying elements.
	   */
	  useLayerForClickAway: _propTypes2.default.bool
	} : void 0;
	exports.default = IconMenu;

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _toArray2 = __webpack_require__(542);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(59);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(537);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _ClickAwayListener = __webpack_require__(577);
	
	var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);
	
	var _keycode = __webpack_require__(510);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _propTypes3 = __webpack_require__(503);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	var _List = __webpack_require__(545);
	
	var _List2 = _interopRequireDefault(_List);
	
	var _menuUtils = __webpack_require__(578);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var desktop = props.desktop,
	      maxHeight = props.maxHeight,
	      width = props.width;
	  var muiTheme = context.muiTheme;
	
	
	  var styles = {
	    root: {
	      // Nested div bacause the List scales x faster than it scales y
	      zIndex: muiTheme.zIndex.menu,
	      maxHeight: maxHeight,
	      overflowY: maxHeight ? 'auto' : null
	    },
	    divider: {
	      marginTop: 7,
	      marginBottom: 8
	    },
	    list: {
	      display: 'table-cell',
	      paddingBottom: desktop ? 16 : 8,
	      paddingTop: desktop ? 16 : 8,
	      userSelect: 'none',
	      width: width
	    },
	    selectedMenuItem: {
	      color: muiTheme.menuItem.selectedTextColor
	    }
	  };
	
	  return styles;
	}
	
	var Menu = function (_Component) {
	  (0, _inherits3.default)(Menu, _Component);
	
	  function Menu(props, context) {
	    (0, _classCallCheck3.default)(this, Menu);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props, context));
	
	    _initialiseProps.call(_this);
	
	    var filteredChildren = _this.getFilteredChildren(props.children);
	    var selectedIndex = _this.getLastSelectedIndex(props, filteredChildren);
	
	    var newFocusIndex = props.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
	    if (newFocusIndex !== -1 && props.onMenuItemFocusChange) {
	      props.onMenuItemFocusChange(null, newFocusIndex);
	    }
	    _this.state = {
	      focusIndex: newFocusIndex,
	      isKeyboardFocused: props.initiallyKeyboardFocused,
	      keyWidth: props.desktop ? 64 : 56
	    };
	
	    _this.hotKeyHolder = new _menuUtils.HotKeyHolder();
	    return _this;
	  }
	
	  (0, _createClass3.default)(Menu, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.autoWidth) {
	        this.setWidth();
	      }
	      this.setScollPosition();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var selectedIndex = void 0;
	      var filteredChildren = this.getFilteredChildren(nextProps.children);
	
	      if (this.props.multiple !== true) {
	        selectedIndex = this.getLastSelectedIndex(nextProps, filteredChildren);
	      } else {
	        selectedIndex = this.state.focusIndex;
	      }
	
	      var newFocusIndex = nextProps.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
	      if (newFocusIndex !== this.state.focusIndex && this.props.onMenuItemFocusChange) {
	        this.props.onMenuItemFocusChange(null, newFocusIndex);
	      }
	      this.setState({
	        focusIndex: newFocusIndex,
	        keyWidth: nextProps.desktop ? 64 : 56
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.autoWidth) this.setWidth();
	    }
	  }, {
	    key: 'getValueLink',
	
	
	    // Do not use outside of this component, it will be removed once valueLink is deprecated
	    value: function getValueLink(props) {
	      return props.valueLink || {
	        value: props.value,
	        requestChange: props.onChange
	      };
	    }
	  }, {
	    key: 'setKeyboardFocused',
	    value: function setKeyboardFocused(keyboardFocused) {
	      this.setState({
	        isKeyboardFocused: keyboardFocused
	      });
	    }
	  }, {
	    key: 'getFilteredChildren',
	    value: function getFilteredChildren(children) {
	      var filteredChildren = [];
	      _react2.default.Children.forEach(children, function (child) {
	        if (child) {
	          filteredChildren.push(child);
	        }
	      });
	      return filteredChildren;
	    }
	  }, {
	    key: 'cloneMenuItem',
	    value: function cloneMenuItem(child, childIndex, styles, index) {
	      var _this2 = this;
	
	      var childIsDisabled = child.props.disabled;
	
	      var selectedChildStyles = {};
	      if (!childIsDisabled) {
	        var selected = this.isChildSelected(child, this.props);
	
	        if (selected) {
	          (0, _simpleAssign2.default)(selectedChildStyles, styles.selectedMenuItem, this.props.selectedMenuItemStyle);
	        }
	      }
	      var mergedChildStyles = (0, _simpleAssign2.default)({}, child.props.style, this.props.menuItemStyle, selectedChildStyles);
	
	      var extraProps = {
	        desktop: this.props.desktop,
	        style: mergedChildStyles
	      };
	      if (!childIsDisabled) {
	        var isFocused = childIndex === this.state.focusIndex;
	        var focusState = 'none';
	        if (isFocused) {
	          focusState = this.state.isKeyboardFocused ? 'keyboard-focused' : 'focused';
	        }
	
	        (0, _simpleAssign2.default)(extraProps, {
	          focusState: focusState,
	          onTouchTap: function onTouchTap(event) {
	            _this2.handleMenuItemTouchTap(event, child, index);
	            if (child.props.onTouchTap) child.props.onTouchTap(event);
	          },
	          ref: isFocused ? 'focusedMenuItem' : null
	        });
	      }
	      return _react2.default.cloneElement(child, extraProps);
	    }
	  }, {
	    key: 'decrementKeyboardFocusIndex',
	    value: function decrementKeyboardFocusIndex(event) {
	      var index = this.state.focusIndex;
	
	      index--;
	      if (index < 0) index = 0;
	
	      this.setFocusIndex(event, index, true);
	    }
	  }, {
	    key: 'getMenuItemCount',
	    value: function getMenuItemCount(filteredChildren) {
	      var menuItemCount = 0;
	      filteredChildren.forEach(function (child) {
	        var childIsADivider = child.type && child.type.muiName === 'Divider';
	        var childIsDisabled = child.props.disabled;
	        if (!childIsADivider && !childIsDisabled) menuItemCount++;
	      });
	      return menuItemCount;
	    }
	  }, {
	    key: 'getLastSelectedIndex',
	    value: function getLastSelectedIndex(props, filteredChildren) {
	      var _this3 = this;
	
	      var selectedIndex = -1;
	      var menuItemIndex = 0;
	
	      filteredChildren.forEach(function (child) {
	        var childIsADivider = child.type && child.type.muiName === 'Divider';
	
	        if (_this3.isChildSelected(child, props)) selectedIndex = menuItemIndex;
	        if (!childIsADivider) menuItemIndex++;
	      });
	
	      return selectedIndex;
	    }
	  }, {
	    key: 'setFocusIndexStartsWith',
	    value: function setFocusIndexStartsWith(event, keys) {
	      var foundIndex = -1;
	      _react2.default.Children.forEach(this.props.children, function (child, index) {
	        if (foundIndex >= 0) {
	          return;
	        }
	        var primaryText = child.props.primaryText;
	
	        if (typeof primaryText === 'string' && new RegExp('^' + keys, 'i').test(primaryText)) {
	          foundIndex = index;
	        }
	      });
	      if (foundIndex >= 0) {
	        this.setFocusIndex(event, foundIndex, true);
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: 'handleMenuItemTouchTap',
	    value: function handleMenuItemTouchTap(event, item, index) {
	      var children = this.props.children;
	      var multiple = this.props.multiple;
	      var valueLink = this.getValueLink(this.props);
	      var menuValue = valueLink.value;
	      var itemValue = item.props.value;
	      var focusIndex = _react2.default.isValidElement(children) ? 0 : children.indexOf(item);
	
	      this.setFocusIndex(event, focusIndex, false);
	
	      if (multiple) {
	        menuValue = menuValue || [];
	
	        var itemIndex = menuValue.indexOf(itemValue);
	
	        var _menuValue = menuValue,
	            _menuValue2 = (0, _toArray3.default)(_menuValue),
	            newMenuValue = _menuValue2.slice(0);
	
	        if (itemIndex === -1) {
	          newMenuValue.push(itemValue);
	        } else {
	          newMenuValue.splice(itemIndex, 1);
	        }
	
	        valueLink.requestChange(event, newMenuValue);
	      } else if (!multiple && itemValue !== menuValue) {
	        valueLink.requestChange(event, itemValue);
	      }
	
	      this.props.onItemTouchTap(event, item, index);
	    }
	  }, {
	    key: 'incrementKeyboardFocusIndex',
	    value: function incrementKeyboardFocusIndex(event, filteredChildren) {
	      var index = this.state.focusIndex;
	      var maxIndex = this.getMenuItemCount(filteredChildren) - 1;
	
	      index++;
	      if (index > maxIndex) index = maxIndex;
	
	      this.setFocusIndex(event, index, true);
	    }
	  }, {
	    key: 'isChildSelected',
	    value: function isChildSelected(child, props) {
	      var menuValue = this.getValueLink(props).value;
	      var childValue = child.props.value;
	
	      if (props.multiple) {
	        return menuValue && menuValue.length && menuValue.indexOf(childValue) !== -1;
	      } else {
	        return child.props.hasOwnProperty('value') && menuValue === childValue;
	      }
	    }
	  }, {
	    key: 'setFocusIndex',
	    value: function setFocusIndex(event, newIndex, isKeyboardFocused) {
	      if (this.props.onMenuItemFocusChange) {
	        // Do this even if `newIndex === this.state.focusIndex` to allow users
	        // to detect up-arrow on the first MenuItem or down-arrow on the last.
	        this.props.onMenuItemFocusChange(event, newIndex);
	      }
	      this.setState({
	        focusIndex: newIndex,
	        isKeyboardFocused: isKeyboardFocused
	      });
	    }
	  }, {
	    key: 'setScollPosition',
	    value: function setScollPosition() {
	      var desktop = this.props.desktop;
	      var focusedMenuItem = this.refs.focusedMenuItem;
	      var menuItemHeight = desktop ? 32 : 48;
	
	      if (focusedMenuItem) {
	        var selectedOffSet = _reactDom2.default.findDOMNode(focusedMenuItem).offsetTop;
	
	        // Make the focused item be the 2nd item in the list the user sees
	        var scrollTop = selectedOffSet - menuItemHeight;
	        if (scrollTop < menuItemHeight) scrollTop = 0;
	
	        _reactDom2.default.findDOMNode(this.refs.scrollContainer).scrollTop = scrollTop;
	      }
	    }
	  }, {
	    key: 'cancelScrollEvent',
	    value: function cancelScrollEvent(event) {
	      event.stopPropagation();
	      event.preventDefault();
	      return false;
	    }
	  }, {
	    key: 'setWidth',
	    value: function setWidth() {
	      var el = _reactDom2.default.findDOMNode(this);
	      var listEl = _reactDom2.default.findDOMNode(this.refs.list);
	      var elWidth = el.offsetWidth;
	      var keyWidth = this.state.keyWidth;
	      var minWidth = keyWidth * 1.5;
	      var keyIncrements = elWidth / keyWidth;
	      var newWidth = void 0;
	
	      keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
	      newWidth = keyIncrements * keyWidth;
	
	      if (newWidth < minWidth) newWidth = minWidth;
	
	      el.style.width = newWidth + 'px';
	      listEl.style.width = newWidth + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var _props = this.props,
	          autoWidth = _props.autoWidth,
	          children = _props.children,
	          desktop = _props.desktop,
	          disableAutoFocus = _props.disableAutoFocus,
	          initiallyKeyboardFocused = _props.initiallyKeyboardFocused,
	          listStyle = _props.listStyle,
	          maxHeight = _props.maxHeight,
	          multiple = _props.multiple,
	          onItemTouchTap = _props.onItemTouchTap,
	          onEscKeyDown = _props.onEscKeyDown,
	          onMenuItemFocusChange = _props.onMenuItemFocusChange,
	          selectedMenuItemStyle = _props.selectedMenuItemStyle,
	          menuItemStyle = _props.menuItemStyle,
	          style = _props.style,
	          value = _props.value,
	          valueLink = _props.valueLink,
	          width = _props.width,
	          other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'children', 'desktop', 'disableAutoFocus', 'initiallyKeyboardFocused', 'listStyle', 'maxHeight', 'multiple', 'onItemTouchTap', 'onEscKeyDown', 'onMenuItemFocusChange', 'selectedMenuItemStyle', 'menuItemStyle', 'style', 'value', 'valueLink', 'width']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var mergedListStyles = (0, _simpleAssign2.default)(styles.list, listStyle);
	
	      var filteredChildren = this.getFilteredChildren(children);
	
	      var menuItemIndex = 0;
	      var newChildren = _react2.default.Children.map(filteredChildren, function (child, index) {
	        var childIsDisabled = child.props.disabled;
	        var childName = child.type ? child.type.muiName : '';
	        var newChild = child;
	
	        switch (childName) {
	          case 'MenuItem':
	            newChild = _this4.cloneMenuItem(child, menuItemIndex, styles, index);
	            break;
	
	          case 'Divider':
	            newChild = _react2.default.cloneElement(child, {
	              style: (0, _simpleAssign2.default)({}, styles.divider, child.props.style)
	            });
	            break;
	        }
	
	        if (childName === 'MenuItem' && !childIsDisabled) {
	          menuItemIndex++;
	        }
	
	        return newChild;
	      });
	
	      return _react2.default.createElement(
	        _ClickAwayListener2.default,
	        { onClickAway: this.handleClickAway },
	        _react2.default.createElement(
	          'div',
	          {
	            onKeyDown: this.handleKeyDown,
	            onWheel: this.handleOnWheel,
	            style: prepareStyles(mergedRootStyles),
	            ref: 'scrollContainer',
	            role: 'presentation'
	          },
	          _react2.default.createElement(
	            _List2.default,
	            (0, _extends3.default)({}, other, {
	              ref: 'list',
	              style: mergedListStyles,
	              role: 'menu'
	            }),
	            newChildren
	          )
	        )
	      );
	    }
	  }]);
	  return Menu;
	}(_react.Component);
	
	Menu.defaultProps = {
	  autoWidth: true,
	  desktop: false,
	  disableAutoFocus: false,
	  initiallyKeyboardFocused: false,
	  maxHeight: null,
	  multiple: false,
	  onChange: function onChange() {},
	  onEscKeyDown: function onEscKeyDown() {},
	  onItemTouchTap: function onItemTouchTap() {},
	  onKeyDown: function onKeyDown() {}
	};
	Menu.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this5 = this;
	
	  this.handleClickAway = function (event) {
	    if (event.defaultPrevented) {
	      return;
	    }
	
	    _this5.setFocusIndex(event, -1, false);
	  };
	
	  this.handleKeyDown = function (event) {
	    var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
	    var key = (0, _keycode2.default)(event);
	    switch (key) {
	      case 'down':
	        event.preventDefault();
	        _this5.incrementKeyboardFocusIndex(event, filteredChildren);
	        break;
	      case 'esc':
	        _this5.props.onEscKeyDown(event);
	        break;
	      case 'tab':
	        event.preventDefault();
	        if (event.shiftKey) {
	          _this5.decrementKeyboardFocusIndex(event);
	        } else {
	          _this5.incrementKeyboardFocusIndex(event, filteredChildren);
	        }
	        break;
	      case 'up':
	        event.preventDefault();
	        _this5.decrementKeyboardFocusIndex(event);
	        break;
	      default:
	        if (key && key.length === 1) {
	          var hotKeys = _this5.hotKeyHolder.append(key);
	          if (_this5.setFocusIndexStartsWith(event, hotKeys)) {
	            event.preventDefault();
	          }
	        }
	    }
	    _this5.props.onKeyDown(event);
	  };
	
	  this.handleOnWheel = function (event) {
	    var scrollContainer = _this5.refs.scrollContainer;
	    // Only scroll lock if the the Menu is scrollable.
	    if (scrollContainer.scrollHeight <= scrollContainer.clientHeight) return;
	
	    var scrollTop = scrollContainer.scrollTop,
	        scrollHeight = scrollContainer.scrollHeight,
	        clientHeight = scrollContainer.clientHeight;
	
	    var wheelDelta = event.deltaY;
	    var isDeltaPositive = wheelDelta > 0;
	
	    if (isDeltaPositive && wheelDelta > scrollHeight - clientHeight - scrollTop) {
	      scrollContainer.scrollTop = scrollHeight;
	      return _this5.cancelScrollEvent(event);
	    } else if (!isDeltaPositive && -wheelDelta > scrollTop) {
	      scrollContainer.scrollTop = 0;
	      return _this5.cancelScrollEvent(event);
	    }
	  };
	};
	
	 true ? Menu.propTypes = {
	  /**
	   * If true, the width of the menu will be set automatically
	   * according to the widths of its children,
	   * using proper keyline increments (64px for desktop,
	   * 56px otherwise).
	   */
	  autoWidth: _propTypes2.default.bool,
	  /**
	   * The content of the menu. This is usually used to pass `MenuItem`
	   * elements.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * If true, the menu item will render with compact desktop styles.
	   */
	  desktop: _propTypes2.default.bool,
	  /**
	   * If true, the menu will not be auto-focused.
	   */
	  disableAutoFocus: _propTypes2.default.bool,
	  /**
	   * If true, the menu will be keyboard-focused initially.
	   */
	  initiallyKeyboardFocused: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the underlying `List` element.
	   */
	  listStyle: _propTypes2.default.object,
	  /**
	   * The maximum height of the menu in pixels. If specified,
	   * the menu will be scrollable if it is taller than the provided
	   * height.
	   */
	  maxHeight: _propTypes2.default.number,
	  /**
	   * Override the inline-styles of menu items.
	   */
	  menuItemStyle: _propTypes2.default.object,
	  /**
	   * If true, `value` must be an array and the menu will support
	   * multiple selections.
	   */
	  multiple: _propTypes2.default.bool,
	  /**
	   * Callback function fired when a menu item with `value` not
	   * equal to the current `value` of the menu is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the menu item.
	   * @param {any}  value If `multiple` is true, the menu's `value`
	   * array with either the menu item's `value` added (if
	   * it wasn't already selected) or omitted (if it was already selected).
	   * Otherwise, the `value` of the menu item.
	   */
	  onChange: _propTypes2.default.func,
	  /**
	   * Callback function fired when the menu is focused and the *Esc* key
	   * is pressed.
	   *
	   * @param {object} event `keydown` event targeting the menu.
	   */
	  onEscKeyDown: _propTypes2.default.func,
	  /**
	   * Callback function fired when a menu item is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the menu item.
	   * @param {object} menuItem The menu item.
	   * @param {number} index The index of the menu item.
	   */
	  onItemTouchTap: _propTypes2.default.func,
	  /** @ignore */
	  onKeyDown: _propTypes2.default.func,
	  /**
	   * Callback function fired when the focus on a `MenuItem` is changed.
	   * There will be some "duplicate" changes reported if two different
	   * focusing event happen, for example if a `MenuItem` is focused via
	   * the keyboard and then it is clicked on.
	   *
	   * @param {object} event The event that triggered the focus change.
	   * The event can be null since the focus can be changed for non-event
	   * reasons such as prop changes.
	   * @param {number} newFocusIndex The index of the newly focused
	   * `MenuItem` or `-1` if focus was lost.
	   */
	  onMenuItemFocusChange: _propTypes2.default.func,
	  /**
	   * Override the inline-styles of selected menu items.
	   */
	  selectedMenuItemStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * If `multiple` is true, an array of the `value`s of the selected
	   * menu items. Otherwise, the `value` of the selected menu item.
	   * If provided, the menu will be a controlled component.
	   * This component also supports valueLink.
	   */
	  value: _propTypes2.default.any,
	  /**
	   * ValueLink for the menu's `value`.
	   */
	  valueLink: _propTypes2.default.object,
	  /**
	   * The width of the menu. If not specified, the menu's width
	   * will be set according to the widths of its children, using
	   * proper keyline increments (64px for desktop, 56px otherwise).
	   */
	  width: _propTypes4.default.stringOrNumber
	} : void 0;
	exports.default = Menu;

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(59);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _events = __webpack_require__(552);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isDescendant = function isDescendant(el, target) {
	  if (target !== null) {
	    return el === target || isDescendant(el, target.parentNode);
	  }
	  return false;
	};
	
	var clickAwayEvents = ['mouseup', 'touchend'];
	var bind = function bind(callback) {
	  return clickAwayEvents.forEach(function (event) {
	    return _events2.default.on(document, event, callback);
	  });
	};
	var unbind = function unbind(callback) {
	  return clickAwayEvents.forEach(function (event) {
	    return _events2.default.off(document, event, callback);
	  });
	};
	
	var ClickAwayListener = function (_Component) {
	  (0, _inherits3.default)(ClickAwayListener, _Component);
	
	  function ClickAwayListener() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, ClickAwayListener);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClickAwayListener.__proto__ || (0, _getPrototypeOf2.default)(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickAway = function (event) {
	      if (event.defaultPrevented) {
	        return;
	      }
	
	      // IE11 support, which trigger the handleClickAway even after the unbind
	      if (_this.isCurrentlyMounted) {
	        var el = _reactDom2.default.findDOMNode(_this);
	
	        if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
	          _this.props.onClickAway(event);
	        }
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(ClickAwayListener, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.isCurrentlyMounted = true;
	      if (this.props.onClickAway) {
	        bind(this.handleClickAway);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.onClickAway !== this.props.onClickAway) {
	        unbind(this.handleClickAway);
	        if (this.props.onClickAway) {
	          bind(this.handleClickAway);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.isCurrentlyMounted = false;
	      unbind(this.handleClickAway);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	  return ClickAwayListener;
	}(_react.Component);
	
	 true ? ClickAwayListener.propTypes = {
	  children: _propTypes2.default.element,
	  onClickAway: _propTypes2.default.func
	} : void 0;
	exports.default = ClickAwayListener;

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HotKeyHolder = undefined;
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HotKeyHolder = exports.HotKeyHolder = function () {
	  function HotKeyHolder() {
	    var _this = this;
	
	    (0, _classCallCheck3.default)(this, HotKeyHolder);
	
	    this.clear = function () {
	      _this.timerId = null;
	      _this.lastKeys = null;
	    };
	  }
	
	  (0, _createClass3.default)(HotKeyHolder, [{
	    key: 'append',
	    value: function append(key) {
	      clearTimeout(this.timerId);
	      this.timerId = setTimeout(this.clear, 500);
	      return this.lastKeys = (this.lastKeys || '') + key;
	    }
	  }]);
	  return HotKeyHolder;
	}();

/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(59);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactEventListener = __webpack_require__(507);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _RenderToLayer = __webpack_require__(513);
	
	var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);
	
	var _propTypes3 = __webpack_require__(503);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	var _Paper = __webpack_require__(501);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _lodash = __webpack_require__(580);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _PopoverAnimationDefault = __webpack_require__(581);
	
	var _PopoverAnimationDefault2 = _interopRequireDefault(_PopoverAnimationDefault);
	
	var _iOSHelpers = __webpack_require__(582);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	  root: {
	    display: 'none'
	  }
	};
	
	var Popover = function (_Component) {
	  (0, _inherits3.default)(Popover, _Component);
	
	  function Popover(props, context) {
	    (0, _classCallCheck3.default)(this, Popover);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).call(this, props, context));
	
	    _this.timeout = null;
	
	    _this.renderLayer = function () {
	      var _this$props = _this.props,
	          animated = _this$props.animated,
	          animation = _this$props.animation,
	          anchorEl = _this$props.anchorEl,
	          anchorOrigin = _this$props.anchorOrigin,
	          autoCloseWhenOffScreen = _this$props.autoCloseWhenOffScreen,
	          canAutoPosition = _this$props.canAutoPosition,
	          children = _this$props.children,
	          onRequestClose = _this$props.onRequestClose,
	          style = _this$props.style,
	          targetOrigin = _this$props.targetOrigin,
	          useLayerForClickAway = _this$props.useLayerForClickAway,
	          other = (0, _objectWithoutProperties3.default)(_this$props, ['animated', 'animation', 'anchorEl', 'anchorOrigin', 'autoCloseWhenOffScreen', 'canAutoPosition', 'children', 'onRequestClose', 'style', 'targetOrigin', 'useLayerForClickAway']);
	
	
	      var styleRoot = style;
	
	      if (!animated) {
	        styleRoot = {
	          position: 'fixed',
	          zIndex: _this.context.muiTheme.zIndex.popover
	        };
	
	        if (!_this.state.open) {
	          return null;
	        }
	
	        return _react2.default.createElement(
	          _Paper2.default,
	          (0, _extends3.default)({ style: (0, _simpleAssign2.default)(styleRoot, style) }, other),
	          children
	        );
	      }
	
	      var Animation = animation || _PopoverAnimationDefault2.default;
	
	      return _react2.default.createElement(
	        Animation,
	        (0, _extends3.default)({
	          targetOrigin: targetOrigin,
	          style: styleRoot
	        }, other, {
	          open: _this.state.open && !_this.state.closing
	        }),
	        children
	      );
	    };
	
	    _this.componentClickAway = function (event) {
	      event.preventDefault();
	      _this.requestClose('clickAway');
	    };
	
	    _this.setPlacement = function (scrolling) {
	      if (!_this.state.open) {
	        return;
	      }
	
	      if (!_this.refs.layer.getLayer()) {
	        return;
	      }
	
	      var targetEl = _this.refs.layer.getLayer().children[0];
	      if (!targetEl) {
	        return;
	      }
	
	      var _this$props2 = _this.props,
	          targetOrigin = _this$props2.targetOrigin,
	          anchorOrigin = _this$props2.anchorOrigin;
	
	      var anchorEl = _this.props.anchorEl || _this.anchorEl;
	
	      var anchor = _this.getAnchorPosition(anchorEl);
	      var target = _this.getTargetPosition(targetEl);
	
	      var targetPosition = {
	        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
	        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
	      };
	
	      if (scrolling && _this.props.autoCloseWhenOffScreen) {
	        _this.autoCloseWhenOffScreen(anchor);
	      }
	
	      if (_this.props.canAutoPosition) {
	        target = _this.getTargetPosition(targetEl); // update as height may have changed
	        targetPosition = _this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
	      }
	
	      targetEl.style.top = Math.max(0, targetPosition.top) + 'px';
	      targetEl.style.left = Math.max(0, targetPosition.left) + 'px';
	      targetEl.style.maxHeight = window.innerHeight + 'px';
	    };
	
	    _this.handleResize = (0, _lodash2.default)(_this.setPlacement, 100);
	    _this.handleScroll = (0, _lodash2.default)(_this.setPlacement.bind(_this, true), 50);
	
	    _this.state = {
	      open: props.open,
	      closing: false
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(Popover, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setPlacement();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;
	
	      if (nextProps.open === this.props.open) {
	        return;
	      }
	
	      if (nextProps.open) {
	        clearTimeout(this.timeout);
	        this.timeout = null;
	        this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
	        this.setState({
	          open: true,
	          closing: false
	        });
	      } else {
	        if (nextProps.animated) {
	          if (this.timeout !== null) return;
	          this.setState({ closing: true });
	          this.timeout = setTimeout(function () {
	            _this2.setState({
	              open: false
	            }, function () {
	              _this2.timeout = null;
	            });
	          }, 500);
	        } else {
	          this.setState({
	            open: false
	          });
	        }
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setPlacement();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.handleResize.cancel();
	      this.handleScroll.cancel();
	
	      if (this.timeout) {
	        clearTimeout(this.timeout);
	        this.timeout = null;
	      }
	    }
	  }, {
	    key: 'requestClose',
	    value: function requestClose(reason) {
	      if (this.props.onRequestClose) {
	        this.props.onRequestClose(reason);
	      }
	    }
	  }, {
	    key: 'getAnchorPosition',
	    value: function getAnchorPosition(el) {
	      if (!el) {
	        el = _reactDom2.default.findDOMNode(this);
	      }
	
	      var rect = el.getBoundingClientRect();
	      var a = {
	        top: rect.top,
	        left: rect.left,
	        width: el.offsetWidth,
	        height: el.offsetHeight
	      };
	
	      a.right = rect.right || a.left + a.width;
	
	      // The fixed positioning isn't respected on iOS when an input is focused.
	      // We need to compute the position from the top of the page and not the viewport.
	      if ((0, _iOSHelpers.isIOS)() && document.activeElement.tagName === 'INPUT') {
	        a.bottom = (0, _iOSHelpers.getOffsetTop)(el) + a.height;
	      } else {
	        a.bottom = rect.bottom || a.top + a.height;
	      }
	      a.middle = a.left + (a.right - a.left) / 2;
	      a.center = a.top + (a.bottom - a.top) / 2;
	
	      return a;
	    }
	  }, {
	    key: 'getTargetPosition',
	    value: function getTargetPosition(targetEl) {
	      return {
	        top: 0,
	        center: targetEl.offsetHeight / 2,
	        bottom: targetEl.offsetHeight,
	        left: 0,
	        middle: targetEl.offsetWidth / 2,
	        right: targetEl.offsetWidth
	      };
	    }
	  }, {
	    key: 'autoCloseWhenOffScreen',
	    value: function autoCloseWhenOffScreen(anchorPosition) {
	      if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWidth) {
	        this.requestClose('offScreen');
	      }
	    }
	  }, {
	    key: 'getOverlapMode',
	    value: function getOverlapMode(anchor, target, median) {
	      if ([anchor, target].indexOf(median) >= 0) return 'auto';
	      if (anchor === target) return 'inclusive';
	      return 'exclusive';
	    }
	  }, {
	    key: 'getPositions',
	    value: function getPositions(anchor, target) {
	      var a = (0, _extends3.default)({}, anchor);
	      var t = (0, _extends3.default)({}, target);
	
	      var positions = {
	        x: ['left', 'right'].filter(function (p) {
	          return p !== t.horizontal;
	        }),
	        y: ['top', 'bottom'].filter(function (p) {
	          return p !== t.vertical;
	        })
	      };
	
	      var overlap = {
	        x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
	        y: this.getOverlapMode(a.vertical, t.vertical, 'center')
	      };
	
	      positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
	      positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');
	
	      if (overlap.y !== 'auto') {
	        a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
	        if (overlap.y === 'inclusive') {
	          t.vertical = t.vertical;
	        }
	      }
	
	      if (overlap.x !== 'auto') {
	        a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
	        if (overlap.y === 'inclusive') {
	          t.horizontal = t.horizontal;
	        }
	      }
	
	      return {
	        positions: positions,
	        anchorPos: a
	      };
	    }
	  }, {
	    key: 'applyAutoPositionIfNeeded',
	    value: function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
	      var _getPositions = this.getPositions(anchorOrigin, targetOrigin),
	          positions = _getPositions.positions,
	          anchorPos = _getPositions.anchorPos;
	
	      if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
	        var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
	        if (newTop + target.bottom <= window.innerHeight) {
	          targetPosition.top = Math.max(0, newTop);
	        } else {
	          newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
	          if (newTop + target.bottom <= window.innerHeight) {
	            targetPosition.top = Math.max(0, newTop);
	          }
	        }
	      }
	
	      if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
	        var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
	        if (newLeft + target.right <= window.innerWidth) {
	          targetPosition.left = Math.max(0, newLeft);
	        } else {
	          newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
	          if (newLeft + target.right <= window.innerWidth) {
	            targetPosition.left = Math.max(0, newLeft);
	          }
	        }
	      }
	
	      return targetPosition;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: styles.root },
	        _react2.default.createElement(_reactEventListener2.default, {
	          target: 'window',
	          onScroll: this.handleScroll,
	          onResize: this.handleResize
	        }),
	        _react2.default.createElement(_RenderToLayer2.default, {
	          ref: 'layer',
	          open: this.state.open,
	          componentClickAway: this.componentClickAway,
	          useLayerForClickAway: this.props.useLayerForClickAway,
	          render: this.renderLayer
	        })
	      );
	    }
	  }]);
	  return Popover;
	}(_react.Component);
	
	Popover.defaultProps = {
	  anchorOrigin: {
	    vertical: 'bottom',
	    horizontal: 'left'
	  },
	  animated: true,
	  autoCloseWhenOffScreen: true,
	  canAutoPosition: true,
	  onRequestClose: function onRequestClose() {},
	  open: false,
	  style: {
	    overflowY: 'auto'
	  },
	  targetOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  },
	  useLayerForClickAway: true,
	  zDepth: 1
	};
	Popover.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? Popover.propTypes = {
	  /**
	   * This is the DOM element that will be used to set the position of the
	   * popover.
	   */
	  anchorEl: _propTypes2.default.object,
	  /**
	   * This is the point on the anchor where the popover's
	   * `targetOrigin` will attach to.
	   * Options:
	   * vertical: [top, center, bottom]
	   * horizontal: [left, middle, right].
	   */
	  anchorOrigin: _propTypes4.default.origin,
	  /**
	   * If true, the popover will apply transitions when
	   * it is added to the DOM.
	   */
	  animated: _propTypes2.default.bool,
	  /**
	   * Override the default animation component used.
	   */
	  animation: _propTypes2.default.func,
	  /**
	   * If true, the popover will hide when the anchor is scrolled off the screen.
	   */
	  autoCloseWhenOffScreen: _propTypes2.default.bool,
	  /**
	   * If true, the popover (potentially) ignores `targetOrigin`
	   * and `anchorOrigin` to make itself fit on screen,
	   * which is useful for mobile devices.
	   */
	  canAutoPosition: _propTypes2.default.bool,
	  /**
	   * The content of the popover.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * Callback function fired when the popover is requested to be closed.
	   *
	   * @param {string} reason The reason for the close request. Possibles values
	   * are 'clickAway' and 'offScreen'.
	   */
	  onRequestClose: _propTypes2.default.func,
	  /**
	   * If true, the popover is visible.
	   */
	  open: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * This is the point on the popover which will attach to
	   * the anchor's origin.
	   * Options:
	   * vertical: [top, center, bottom]
	   * horizontal: [left, middle, right].
	   */
	  targetOrigin: _propTypes4.default.origin,
	  /**
	   * If true, the popover will render on top of an invisible
	   * layer, which will prevent clicks to the underlying
	   * elements, and trigger an `onRequestClose('clickAway')` call.
	   */
	  useLayerForClickAway: _propTypes2.default.bool,
	  /**
	   * The zDepth of the popover.
	   */
	  zDepth: _propTypes4.default.zDepth
	} : void 0;
	exports.default = Popover;

/***/ }),
/* 580 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = throttle;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _propTypes3 = __webpack_require__(503);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	var _Paper = __webpack_require__(501);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var targetOrigin = props.targetOrigin;
	  var open = state.open;
	  var muiTheme = context.muiTheme;
	
	  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');
	
	  return {
	    root: {
	      position: 'fixed',
	      zIndex: muiTheme.zIndex.popover,
	      opacity: open ? 1 : 0,
	      transform: open ? 'scale(1, 1)' : 'scale(0, 0)',
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity']),
	      maxHeight: '100%'
	    },
	    horizontal: {
	      maxHeight: '100%',
	      overflowY: 'auto',
	      transform: open ? 'scaleX(1)' : 'scaleX(0)',
	      opacity: open ? 1 : 0,
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
	    },
	    vertical: {
	      opacity: open ? 1 : 0,
	      transform: open ? 'scaleY(1)' : 'scaleY(0)',
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('500ms', ['transform', 'opacity'])
	    }
	  };
	}
	
	var PopoverAnimationDefault = function (_Component) {
	  (0, _inherits3.default)(PopoverAnimationDefault, _Component);
	
	  function PopoverAnimationDefault() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, PopoverAnimationDefault);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PopoverAnimationDefault.__proto__ || (0, _getPrototypeOf2.default)(PopoverAnimationDefault)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(PopoverAnimationDefault, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        open: nextProps.open
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          zDepth = _props.zDepth;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: zDepth,
	          className: className
	        },
	        _react2.default.createElement(
	          'div',
	          { style: prepareStyles(styles.horizontal) },
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles(styles.vertical) },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);
	  return PopoverAnimationDefault;
	}(_react.Component);
	
	PopoverAnimationDefault.defaultProps = {
	  style: {},
	  zDepth: 1
	};
	PopoverAnimationDefault.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? PopoverAnimationDefault.propTypes = {
	  children: _propTypes2.default.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  open: _propTypes2.default.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  targetOrigin: _propTypes4.default.origin.isRequired,
	  zDepth: _propTypes4.default.zDepth
	} : void 0;
	exports.default = PopoverAnimationDefault;

/***/ }),
/* 582 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	* Returns a number of pixels from the top of the screen for given dom element.
	*
	* @param {object} dom element
	* @returns {number} A position from the top of the screen in pixels
	*/
	var getOffsetTop = exports.getOffsetTop = function getOffsetTop(elem) {
	  var yPos = elem.offsetTop;
	  var tempEl = elem.offsetParent;
	
	  while (tempEl != null) {
	    yPos += tempEl.offsetTop;
	    tempEl = tempEl.offsetParent;
	  }
	
	  return yPos;
	};
	
	var isIOS = exports.isIOS = function isIOS() {
	  return (/iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream
	  );
	};

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(59);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(537);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _Popover = __webpack_require__(579);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _check = __webpack_require__(584);
	
	var _check2 = _interopRequireDefault(_check);
	
	var _ListItem = __webpack_require__(548);
	
	var _ListItem2 = _interopRequireDefault(_ListItem);
	
	var _Menu = __webpack_require__(576);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _propTypes3 = __webpack_require__(503);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nestedMenuStyle = {
	  position: 'relative'
	};
	
	function getStyles(props, context) {
	  var disabledColor = context.muiTheme.baseTheme.palette.disabledColor;
	  var textColor = context.muiTheme.baseTheme.palette.textColor;
	  var indent = props.desktop ? 64 : 72;
	  var sidePadding = props.desktop ? 24 : 16;
	
	  var styles = {
	    root: {
	      color: props.disabled ? disabledColor : textColor,
	      cursor: props.disabled ? 'default' : 'pointer',
	      minHeight: props.desktop ? '32px' : '48px',
	      lineHeight: props.desktop ? '32px' : '48px',
	      fontSize: props.desktop ? 15 : 16,
	      whiteSpace: 'nowrap'
	    },
	
	    innerDivStyle: {
	      paddingLeft: props.leftIcon || props.insetChildren || props.checked ? indent : sidePadding,
	      paddingRight: props.rightIcon ? indent : sidePadding,
	      paddingBottom: 0,
	      paddingTop: 0
	    },
	
	    secondaryText: {
	      float: 'right'
	    },
	
	    leftIconDesktop: {
	      margin: 0,
	      left: 24,
	      top: 4
	    },
	
	    rightIconDesktop: {
	      margin: 0,
	      right: 24,
	      top: 4,
	      fill: context.muiTheme.menuItem.rightIconDesktopFill
	    }
	  };
	
	  return styles;
	}
	
	var MenuItem = function (_Component) {
	  (0, _inherits3.default)(MenuItem, _Component);
	
	  function MenuItem() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, MenuItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuItem.__proto__ || (0, _getPrototypeOf2.default)(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _this.cloneMenuItem = function (item) {
	      return _react2.default.cloneElement(item, {
	        onTouchTap: function onTouchTap(event) {
	          if (!item.props.menuItems) {
	            _this.handleRequestClose();
	          }
	
	          if (item.props.onTouchTap) {
	            item.props.onTouchTap(event);
	          }
	        }
	      });
	    }, _this.handleTouchTap = function (event) {
	      event.preventDefault();
	
	      _this.setState({
	        open: true,
	        anchorEl: _reactDom2.default.findDOMNode(_this)
	      });
	
	      if (_this.props.onTouchTap) {
	        _this.props.onTouchTap(event);
	      }
	    }, _this.handleRequestClose = function () {
	      _this.setState({
	        open: false,
	        anchorEl: null
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(MenuItem, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.applyFocusState();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.state.open && nextProps.focusState === 'none') {
	        this.handleRequestClose();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.applyFocusState();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.state.open) {
	        this.setState({
	          open: false
	        });
	      }
	    }
	  }, {
	    key: 'applyFocusState',
	    value: function applyFocusState() {
	      this.refs.listItem.applyFocusState(this.props.focusState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          checked = _props.checked,
	          children = _props.children,
	          desktop = _props.desktop,
	          disabled = _props.disabled,
	          focusState = _props.focusState,
	          innerDivStyle = _props.innerDivStyle,
	          insetChildren = _props.insetChildren,
	          leftIcon = _props.leftIcon,
	          menuItems = _props.menuItems,
	          rightIcon = _props.rightIcon,
	          secondaryText = _props.secondaryText,
	          style = _props.style,
	          animation = _props.animation,
	          anchorOrigin = _props.anchorOrigin,
	          value = _props.value,
	          other = (0, _objectWithoutProperties3.default)(_props, ['checked', 'children', 'desktop', 'disabled', 'focusState', 'innerDivStyle', 'insetChildren', 'leftIcon', 'menuItems', 'rightIcon', 'secondaryText', 'style', 'animation', 'anchorOrigin', 'value']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var mergedInnerDivStyles = (0, _simpleAssign2.default)(styles.innerDivStyle, innerDivStyle);
	
	      // Left Icon
	      var leftIconElement = leftIcon ? leftIcon : checked ? _react2.default.createElement(_check2.default, null) : null;
	      if (leftIconElement) {
	        var mergedLeftIconStyles = desktop ? (0, _simpleAssign2.default)(styles.leftIconDesktop, leftIconElement.props.style) : leftIconElement.props.style;
	        leftIconElement = _react2.default.cloneElement(leftIconElement, { style: mergedLeftIconStyles });
	      }
	
	      // Right Icon
	      var rightIconElement = void 0;
	      if (rightIcon) {
	        var mergedRightIconStyles = desktop ? (0, _simpleAssign2.default)(styles.rightIconDesktop, rightIcon.props.style) : rightIcon.props.style;
	        rightIconElement = _react2.default.cloneElement(rightIcon, { style: mergedRightIconStyles });
	      }
	
	      // Secondary Text
	      var secondaryTextElement = void 0;
	      if (secondaryText) {
	        var secondaryTextIsAnElement = _react2.default.isValidElement(secondaryText);
	        var mergedSecondaryTextStyles = secondaryTextIsAnElement ? (0, _simpleAssign2.default)(styles.secondaryText, secondaryText.props.style) : null;
	
	        secondaryTextElement = secondaryTextIsAnElement ? _react2.default.cloneElement(secondaryText, { style: mergedSecondaryTextStyles }) : _react2.default.createElement(
	          'div',
	          { style: prepareStyles(styles.secondaryText) },
	          secondaryText
	        );
	      }
	      var childMenuPopover = void 0;
	      if (menuItems) {
	        childMenuPopover = _react2.default.createElement(
	          _Popover2.default,
	          {
	            animation: animation,
	            anchorOrigin: anchorOrigin,
	            anchorEl: this.state.anchorEl,
	            open: this.state.open,
	            useLayerForClickAway: false,
	            onRequestClose: this.handleRequestClose
	          },
	          _react2.default.createElement(
	            _Menu2.default,
	            { desktop: desktop, disabled: disabled, style: nestedMenuStyle },
	            _react2.default.Children.map(menuItems, this.cloneMenuItem)
	          )
	        );
	        other.onTouchTap = this.handleTouchTap;
	      }
	
	      return _react2.default.createElement(
	        _ListItem2.default,
	        (0, _extends3.default)({}, other, {
	          disabled: disabled,
	          hoverColor: this.context.muiTheme.menuItem.hoverColor,
	          innerDivStyle: mergedInnerDivStyles,
	          insetChildren: insetChildren,
	          leftIcon: leftIconElement,
	          ref: 'listItem',
	          rightIcon: rightIconElement,
	          role: 'menuitem',
	          style: mergedRootStyles
	        }),
	        children,
	        secondaryTextElement,
	        childMenuPopover
	      );
	    }
	  }]);
	  return MenuItem;
	}(_react.Component);
	
	MenuItem.muiName = 'MenuItem';
	MenuItem.defaultProps = {
	  anchorOrigin: { horizontal: 'right', vertical: 'top' },
	  checked: false,
	  desktop: false,
	  disabled: false,
	  focusState: 'none',
	  insetChildren: false
	};
	MenuItem.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? MenuItem.propTypes = {
	  /**
	   * Location of the anchor for the popover of nested `MenuItem`
	   * elements.
	   */
	  anchorOrigin: _propTypes4.default.origin,
	  /**
	   * Override the default animation component used.
	   */
	  animation: _propTypes2.default.func,
	  /**
	   * If true, a left check mark will be rendered.
	   */
	  checked: _propTypes2.default.bool,
	  /**
	   * Elements passed as children to the underlying `ListItem`.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * @ignore
	   * If true, the menu item will render with compact desktop
	   * styles.
	   */
	  desktop: _propTypes2.default.bool,
	  /**
	   * If true, the menu item will be disabled.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * The focus state of the menu item. This prop is used to set the focus
	   * state of the underlying `ListItem`.
	   */
	  focusState: _propTypes2.default.oneOf(['none', 'focused', 'keyboard-focused']),
	  /**
	   * Override the inline-styles of the inner div.
	   */
	  innerDivStyle: _propTypes2.default.object,
	  /**
	   * If true, the children will be indented.
	   * This is only needed when there is no `leftIcon`.
	   */
	  insetChildren: _propTypes2.default.bool,
	  /**
	   * The `SvgIcon` or `FontIcon` to be displayed on the left side.
	   */
	  leftIcon: _propTypes2.default.element,
	  /**
	   * `MenuItem` elements to nest within the menu item.
	   */
	  menuItems: _propTypes2.default.node,
	  /**
	   * Callback function fired when the menu item is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the menu item.
	   */
	  onTouchTap: _propTypes2.default.func,
	  /**
	   * Can be used to render primary text within the menu item.
	   */
	  primaryText: _propTypes2.default.node,
	  /**
	   * The `SvgIcon` or `FontIcon` to be displayed on the right side.
	   */
	  rightIcon: _propTypes2.default.element,
	  /**
	   * Can be used to render secondary text within the menu item.
	   */
	  secondaryText: _propTypes2.default.node,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * The value of the menu item.
	   */
	  value: _propTypes2.default.any
	} : void 0;
	exports.default = MenuItem;

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(559);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(568);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationCheck = function NavigationCheck(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
	  );
	};
	NavigationCheck = (0, _pure2.default)(NavigationCheck);
	NavigationCheck.displayName = 'NavigationCheck';
	NavigationCheck.muiName = 'SvgIcon';
	
	exports.default = NavigationCheck;

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _MenuItem = __webpack_require__(583);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _MenuItem2.default;

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(322);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(382);
	
	var _users = __webpack_require__(521);
	
	var _roles = __webpack_require__(587);
	
	var _organizations = __webpack_require__(662);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _FlatButton = __webpack_require__(664);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _Dialog = __webpack_require__(505);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _findById = __webpack_require__(523);
	
	var _findById2 = _interopRequireDefault(_findById);
	
	var _set2 = __webpack_require__(667);
	
	var _set3 = _interopRequireDefault(_set2);
	
	var _EditUserComponent = __webpack_require__(668);
	
	var _EditUserComponent2 = _interopRequireDefault(_EditUserComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var setUserEnabled = _users.actions.setUserEnabled,
	    editUser = _users.actions.editUser,
	    deleteUser = _users.actions.deleteUser,
	    enterEdit = _users.actions.enterEdit,
	    exitEdit = _users.actions.exitEdit,
	    saveEdit = _users.actions.saveEdit;
	
	
	var mapDispatchToProps = {
	  setUserEnabled: setUserEnabled,
	  editUser: editUser,
	  deleteUser: deleteUser,
	  enterEdit: enterEdit,
	  exitEdit: exitEdit,
	  saveEdit: saveEdit,
	  getRoles: _roles.actions.getRoles,
	  getOrganizations: _organizations.actions.getItems
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	
	  return (0, _extends3.default)({}, state.users, {
	    roles: state.roles.roles,
	    isRequestingRoles: state.roles.isRequesting,
	    hasReceivedRoles: state.roles.hasReceived,
	    rolesErrors: state.roles.errors,
	    organizations: state.organizations.items,
	    hasOrganizations: state.organizations.hasReceived
	  });
	};
	
	/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:
	
	 import { createSelector } from 'reselect'
	 const counter = (state) => state.counter
	 const tripleCount = createSelector(counter, (count) => count * 3)
	 const mapStateToProps = (state) => ({
	 counter: tripleCount(state)
	 })
	
	 Selectors can compute derived data, allowing Redux to store the minimal possible state.
	 Selectors are efficient. A selector is not recomputed unless one of its arguments change.
	 Selectors are composable. They can be used as input to other selectors.
	 https://github.com/reactjs/reselect    */
	
	var EditUserContainer = function (_Component) {
	  (0, _inherits3.default)(EditUserContainer, _Component);
	
	  function EditUserContainer() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, EditUserContainer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EditUserContainer.__proto__ || (0, _getPrototypeOf2.default)(EditUserContainer)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (propName, val) {
	      var changed = (0, _extends3.default)({}, _this.props.user);
	      (0, _set3.default)(changed, propName, val);
	
	      _this.props.editUser(changed);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(EditUserContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (!this.props.roles.isRequesting && !this.props.roles.hasReceived) {
	        this.props.getRoles();
	      }
	
	      if (!this.props.hasOrganizations) {
	        this.props.getOrganizations();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.beingEdited) {
	        return false;
	      }
	
	      var userBeingEdited = (0, _findById2.default)(this.props.beingEdited, this.props.items);
	      if (!userBeingEdited) {
	        return false;
	      }
	
	      if (!this.props.hasOrganizations || !this.props.hasReceivedRoles) {
	        return _react2.default.createElement(
	          _Dialog2.default,
	          { open: true,
	            modal: true
	          },
	          _react2.default.createElement(
	            'span',
	            null,
	            'Loading'
	          )
	        );
	      }
	
	      var disabledSave = (0, _typeof3.default)(this.props.updatingUserId) !== undefined;
	      var dialogOpen = !!userBeingEdited;
	
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Save',
	        disabled: disabledSave,
	        primary: true,
	        onTouchTap: this.props.saveEdit,
	        keyboardFocused: true
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: 'Close',
	        secondary: true,
	        onTouchTap: this.props.exitEdit
	      })];
	
	      return _react2.default.createElement(
	        _Dialog2.default,
	        { open: dialogOpen,
	          modal: false,
	          actions: actions,
	          onRequestClose: this.props.exitEdit,
	          autoScrollBodyContent: true
	        },
	        _react2.default.createElement(_EditUserComponent2.default, { user: userBeingEdited, roles: this.props.roles, organizations: this.props.organizations, onChange: this.onChange })
	      );
	    }
	  }]);
	  return EditUserContainer;
	}(_react.Component);
	
	EditUserContainer.propTypes = {
	  // TODO
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditUserContainer);

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = undefined;
	
	var _assign = __webpack_require__(288);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _typeof2 = __webpack_require__(322);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _stringify = __webpack_require__(588);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	exports.default = rolesReducer;
	
	var _ApiClient = __webpack_require__(473);
	
	var _ApiClient2 = _interopRequireDefault(_ApiClient);
	
	var _pick2 = __webpack_require__(590);
	
	var _pick3 = _interopRequireDefault(_pick2);
	
	var _upsertById = __webpack_require__(660);
	
	var _upsertById2 = _interopRequireDefault(_upsertById);
	
	var _roles = __webpack_require__(661);
	
	var _roles2 = _interopRequireDefault(_roles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_STATE = {
	  roles: [],
	  isRequesting: false,
	  hasReceived: false,
	  errors: false
	};
	
	/*  This is a thunk, meaning it is a function that immediately
	 returns a function for lazy evaluation. It is incredibly useful for
	 creating async actions, especially when combined with redux-thunk! */
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var getRoles = function getRoles() {
	  return function (dispatch, getState) {
	
	    dispatch({
	      type: _roles2.default.REQUESTING_ROLES
	    });
	
	    return _ApiClient2.default.get('/roles?filter[order]=created DESC').then(function (roles) {
	      dispatch({
	        type: _roles2.default.RECEIVED_ROLES,
	        roles: roles
	
	      });
	    }).catch(function (errors) {
	      dispatch({
	        type: _roles2.default.RECEIVED_ROLES_ERROR,
	        errors: errors
	      });
	    });
	  };
	};
	
	var selectRoles = function selectRoles(roleIds) {
	  return function (dispatch, getState) {
	    return dispatch({
	      type: _roles2.default.ONCHANGE_SELECTED_ROLES,
	      selectedRoleIds: roleIds
	    });
	  };
	};
	
	var deleteRoles = function deleteRoles(roleIds) {
	  return function (dispatch, getState) {
	    dispatch({
	      type: _roles2.default.DELETING_ROLES,
	      roleIds: roleIds
	    });
	
	    // TODO implement bulk delete
	    var where = (0, _stringify2.default)({ where: { property: { inq: roleIds } } });
	    return _ApiClient2.default.del('/roles/deleteByIds?ids=' + roleIds.join(',')).then(function (result) {
	      dispatch({
	        type: _roles2.default.DELETED_ROLES,
	        roleIds: roleIds
	      });
	    }).catch(function (errors) {
	      dispatch({
	        type: _roles2.default.RECEIVED_ROLES_ERROR,
	        errors: errors
	      });
	    });
	  };
	};
	
	var _getUpdatedRole = function _getUpdatedRole(dispatch, actionType, _ref) {
	  var id = _ref.data.id;
	
	  return _ApiClient2.default.get('/roles/' + id).then(function (role) {
	    return dispatch({
	      type: actionType,
	      role: role
	    });
	  });
	};
	
	var getDeletedIdsFromMsgData = function getDeletedIdsFromMsgData(msgData) {
	  var id = msgData.id;
	
	  if ((typeof id === 'undefined' ? 'undefined' : (0, _typeof3.default)(id)) === 'object' && id.inq) {
	    return id.inq;
	  }
	
	  return [id];
	};
	
	var onRoleChangeStreamMsg = function onRoleChangeStreamMsg(msg) {
	  var data = JSON.parse(msg.data);
	
	  return function (dispatch, getState) {
	    switch (data.type) {
	      case 'create':
	        return _getUpdatedRole(dispatch, _roles2.default.ADDED_ROLE, data);
	      case 'update':
	        return _getUpdatedRole(dispatch, _roles2.default.UPDATED_ROLE, data);
	
	      case 'remove':
	        var roleIds = getDeletedIdsFromMsgData(data);
	        return dispatch({
	          type: _roles2.default.DELETED_ROLES,
	          roleIds: roleIds
	        });
	
	      default:
	        break;
	    }
	  };
	};
	
	var actions = exports.actions = {
	  getRoles: getRoles,
	  selectRoles: selectRoles,
	  deleteRoles: deleteRoles,
	
	  onRoleChangeStreamMsg: onRoleChangeStreamMsg
	};
	
	function rolesReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
	  var action = arguments[1];
	
	  var newState = (0, _assign2.default)({}, state);
	  switch (action.type) {
	    case _roles2.default.REQUESTING_ROLES:
	      return (0, _assign2.default)({}, state, {
	        isRequesting: true,
	        errors: false
	      });
	
	    case _roles2.default.RECEIVED_ROLES:
	      return (0, _assign2.default)({}, state, {
	        isRequesting: false,
	        hasReceived: true,
	        roles: action.roles
	      });
	
	    case _roles2.default.RECEIVED_ROLES_ERROR:
	      return (0, _assign2.default)({}, state, {
	        isRequesting: false,
	        errors: action.errors
	      });
	
	    case _roles2.default.ONCHANGE_SELECTED_ROLES:
	      return (0, _assign2.default)({}, state, {
	        selectedRoleIds: action.selectedRoleIds
	      });
	
	    case _roles2.default.DELETING_ROLES:
	      return (0, _assign2.default)({}, state, {
	        isDeleting: true,
	        hasDeleted: false
	      });
	
	    case _roles2.default.DELETED_ROLES:
	      return function () {
	        var deletedRolesIds = action.roleIds;
	        var oldRoles = state.roles;
	        var newRoles = oldRoles.filter(function (role, i) {
	          var id = role.id;
	
	          return deletedRolesIds.indexOf(id) === -1;
	        });
	
	        return (0, _assign2.default)({}, state, {
	          isDeleting: false,
	          hasDeleted: true,
	          roles: newRoles,
	          selectedRoleIds: []
	        });
	      }();
	
	    case _roles2.default.DELETED_ROLES_ERROR:
	      return (0, _assign2.default)({}, state, {
	        isDeleting: false,
	        hasDeleted: false
	      });
	
	    // When push is enabled toggle these back
	    //case ACTION_TYPES.ADDED_ROLE:
	    case _roles2.default.CREATED_ROLE:
	      return function () {
	        // Avoids duplicates
	        var roles = (0, _upsertById2.default)(action.role, state.roles);
	        return (0, _assign2.default)({}, state, {
	          roles: roles
	        });
	      }();
	
	    case _roles2.default.UPDATED_ROLE:
	      return function () {
	        var roles = (0, _upsertById2.default)(action.role, state.roles);
	        return (0, _assign2.default)({}, state, {
	          roles: roles
	        });
	      }();
	
	    default:
	      return state;
	  }
	};

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(589), __esModule: true };

/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(7)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

	var basePick = __webpack_require__(591),
	    flatRest = __webpack_require__(648);
	
	/**
	 * Creates an object composed of the picked `object` properties.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [paths] The property paths to pick.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pick(object, ['a', 'c']);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var pick = flatRest(function(object, paths) {
	  return object == null ? {} : basePick(object, paths);
	});
	
	module.exports = pick;


/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

	var basePickBy = __webpack_require__(592),
	    hasIn = __webpack_require__(642);
	
	/**
	 * The base implementation of `_.pick` without support for individual
	 * property identifiers.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} paths The property paths to pick.
	 * @returns {Object} Returns the new object.
	 */
	function basePick(object, paths) {
	  return basePickBy(object, paths, function(value, path) {
	    return hasIn(object, path);
	  });
	}
	
	module.exports = basePick;


/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(593),
	    baseSet = __webpack_require__(637),
	    castPath = __webpack_require__(594);
	
	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} paths The property paths to pick.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy(object, paths, predicate) {
	  var index = -1,
	      length = paths.length,
	      result = {};
	
	  while (++index < length) {
	    var path = paths[index],
	        value = baseGet(object, path);
	
	    if (predicate(value, path)) {
	      baseSet(result, castPath(path, object), value);
	    }
	  }
	  return result;
	}
	
	module.exports = basePickBy;


/***/ }),
/* 593 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(594),
	    toKey = __webpack_require__(636);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(595),
	    isKey = __webpack_require__(596),
	    stringToPath = __webpack_require__(598),
	    toString = __webpack_require__(633);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	
	module.exports = castPath;


/***/ }),
/* 595 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ }),
/* 596 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(595),
	    isSymbol = __webpack_require__(597);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ }),
/* 597 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(209),
	    isObjectLike = __webpack_require__(217);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ }),
/* 598 */
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(599);
	
	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(600);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;


/***/ }),
/* 600 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(601);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Expose `MapCache`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ }),
/* 601 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(602),
	    mapCacheDelete = __webpack_require__(627),
	    mapCacheGet = __webpack_require__(630),
	    mapCacheHas = __webpack_require__(631),
	    mapCacheSet = __webpack_require__(632);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ }),
/* 602 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(603),
	    ListCache = __webpack_require__(618),
	    Map = __webpack_require__(626);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ }),
/* 603 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(604),
	    hashDelete = __webpack_require__(614),
	    hashGet = __webpack_require__(615),
	    hashHas = __webpack_require__(616),
	    hashSet = __webpack_require__(617);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ }),
/* 604 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(605);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ }),
/* 605 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(606);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ }),
/* 606 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(607),
	    getValue = __webpack_require__(613);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ }),
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(608),
	    isMasked = __webpack_require__(610),
	    isObject = __webpack_require__(609),
	    toSource = __webpack_require__(612);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(209),
	    isObject = __webpack_require__(609);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ }),
/* 609 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ }),
/* 610 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(611);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ }),
/* 611 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(211);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ }),
/* 612 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ }),
/* 613 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ }),
/* 614 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ }),
/* 615 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(605);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ }),
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(605);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(605);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ }),
/* 618 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(619),
	    listCacheDelete = __webpack_require__(620),
	    listCacheGet = __webpack_require__(623),
	    listCacheHas = __webpack_require__(624),
	    listCacheSet = __webpack_require__(625);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ }),
/* 619 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ }),
/* 620 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(621);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ }),
/* 621 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(622);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ }),
/* 622 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ }),
/* 623 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(621);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ }),
/* 624 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(621);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ }),
/* 625 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(621);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ }),
/* 626 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(606),
	    root = __webpack_require__(211);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ }),
/* 627 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(628);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ }),
/* 628 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(629);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ }),
/* 629 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ }),
/* 630 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(628);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ }),
/* 631 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(628);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ }),
/* 632 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(628);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ }),
/* 633 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(634);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ }),
/* 634 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(210),
	    arrayMap = __webpack_require__(635),
	    isArray = __webpack_require__(595),
	    isSymbol = __webpack_require__(597);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ }),
/* 635 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ }),
/* 636 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(597);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ }),
/* 637 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(638),
	    castPath = __webpack_require__(594),
	    isIndex = __webpack_require__(641),
	    isObject = __webpack_require__(609),
	    toKey = __webpack_require__(636);
	
	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  if (!isObject(object)) {
	    return object;
	  }
	  path = castPath(path, object);
	
	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;
	
	  while (nested != null && ++index < length) {
	    var key = toKey(path[index]),
	        newValue = value;
	
	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;
	      if (newValue === undefined) {
	        newValue = isObject(objValue)
	          ? objValue
	          : (isIndex(path[index + 1]) ? [] : {});
	      }
	    }
	    assignValue(nested, key, newValue);
	    nested = nested[key];
	  }
	  return object;
	}
	
	module.exports = baseSet;


/***/ }),
/* 638 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(639),
	    eq = __webpack_require__(622);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignValue;


/***/ }),
/* 639 */
/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(640);
	
	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}
	
	module.exports = baseAssignValue;


/***/ }),
/* 640 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(606);
	
	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());
	
	module.exports = defineProperty;


/***/ }),
/* 641 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ }),
/* 642 */
/***/ (function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(643),
	    hasPath = __webpack_require__(644);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;


/***/ }),
/* 643 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	module.exports = baseHasIn;


/***/ }),
/* 644 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(594),
	    isArguments = __webpack_require__(645),
	    isArray = __webpack_require__(595),
	    isIndex = __webpack_require__(641),
	    isLength = __webpack_require__(647),
	    toKey = __webpack_require__(636);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);
	
	  var index = -1,
	      length = path.length,
	      result = false;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}
	
	module.exports = hasPath;


/***/ }),
/* 645 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(646),
	    isObjectLike = __webpack_require__(217);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ }),
/* 646 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(209),
	    isObjectLike = __webpack_require__(217);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ }),
/* 647 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ }),
/* 648 */
/***/ (function(module, exports, __webpack_require__) {

	var flatten = __webpack_require__(649),
	    overRest = __webpack_require__(653),
	    setToString = __webpack_require__(655);
	
	/**
	 * A specialized version of `baseRest` which flattens the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @returns {Function} Returns the new function.
	 */
	function flatRest(func) {
	  return setToString(overRest(func, undefined, flatten), func + '');
	}
	
	module.exports = flatRest;


/***/ }),
/* 649 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(650);
	
	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? baseFlatten(array, 1) : [];
	}
	
	module.exports = flatten;


/***/ }),
/* 650 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(651),
	    isFlattenable = __webpack_require__(652);
	
	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;
	
	  predicate || (predicate = isFlattenable);
	  result || (result = []);
	
	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ }),
/* 651 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ }),
/* 652 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(210),
	    isArguments = __webpack_require__(645),
	    isArray = __webpack_require__(595);
	
	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
	
	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}
	
	module.exports = isFlattenable;


/***/ }),
/* 653 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(654);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = overRest;


/***/ }),
/* 654 */
/***/ (function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ }),
/* 655 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(656),
	    shortOut = __webpack_require__(659);
	
	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);
	
	module.exports = setToString;


/***/ }),
/* 656 */
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(657),
	    defineProperty = __webpack_require__(640),
	    identity = __webpack_require__(658);
	
	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};
	
	module.exports = baseSetToString;


/***/ }),
/* 657 */
/***/ (function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}
	
	module.exports = constant;


/***/ }),
/* 658 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ }),
/* 659 */
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;
	
	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;
	
	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);
	
	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}
	
	module.exports = shortOut;


/***/ }),
/* 660 */
/***/ (function(module, exports) {

	'use strict';
	
	// Completely replaces old with or inserts newItem
	// Return the modified copy of the arr
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var upsertById = function upsertById(newItem, arr) {
	  var id = newItem.id;
	  var index = arr.findIndex(function (x) {
	    return x.id === id;
	  });
	  if (index === -1) {
	    return [newItem].concat(arr);
	  }
	
	  var newArr = [].concat(arr);
	  newArr.splice(index, 1, newItem);
	
	  return newArr;
	};
	
	exports.default = upsertById;

/***/ }),
/* 661 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	//import {Enum} from 'enumify';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _GenerateActionTypes = __webpack_require__(526);
	
	var _GenerateActionTypes2 = _interopRequireDefault(_GenerateActionTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	//class ACTION_TYPES extends Enum {}
	//ACTION_TYPES.initEnum([
	//  'REQUESTING_ROLES',
	//  'RECEIVED_ROLES',
	//  'RECEIVED_ROLES_ERROR',
	//  'ONCHANGE_SELECTED_ROLES',
	//  'DELETING_ROLES',
	//  'DELETED_ROLES',
	//  'DELETED_ROLES_ERROR',
	//  'CREATING_ROLE',
	//  'CREATED_ROLE',
	//  'CREATED_ROLE_ERROR',
	//  'ADDED_ROLE',
	//  'UPDATED_ROLE',
	//  'CHANGE_DRAFT_ROLE'
	//]);
	
	var ACTION_TYPES = (0, _GenerateActionTypes2.default)('ROLE');exports.default = ACTION_TYPES;

/***/ }),
/* 662 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = undefined;
	
	var _assign = __webpack_require__(288);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.default = reducer;
	
	var _ApiClient = __webpack_require__(473);
	
	var _ApiClient2 = _interopRequireDefault(_ApiClient);
	
	var _pick2 = __webpack_require__(590);
	
	var _pick3 = _interopRequireDefault(_pick2);
	
	var _upsertById = __webpack_require__(660);
	
	var _upsertById2 = _interopRequireDefault(_upsertById);
	
	var _organizations = __webpack_require__(663);
	
	var _organizations2 = _interopRequireDefault(_organizations);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_STATE = {
	  items: [],
	  isRequesting: false,
	  hasReceived: false,
	
	  errors: false,
	  isSaving: false
	};
	
	/*  This is a thunk, meaning it is a function that immediately
	 returns a function for lazy evaluation. It is incredibly useful for
	 creating async actions, especially when combined with redux-thunk! */
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var getItems = function getItems() {
	  return function (dispatch, getState) {
	    dispatch({
	      type: _organizations2.default.REQUESTING_ORGANIZATIONS
	    });
	
	    return _ApiClient2.default.get('/organizations?filter[order]=name ASC').then(function (items) {
	      dispatch({
	        type: _organizations2.default.RECEIVED_ORGANIZATIONS,
	        items: items
	      });
	    }).catch(function (errors) {
	      dispatch({
	        type: _organizations2.default.RECEIVED_ORGANIZATIONS_ERROR,
	        errors: errors
	      });
	    });
	  };
	};
	
	var saveItem = function saveItem(item) {
	  return function (dispatch, getState) {
	    var data = (0, _extends3.default)({}, item);
	    data.settings = item.settings || {};
	
	    if (typeof data.id === 'undefined') {
	      delete data.id;
	    }
	
	    dispatch({
	      type: _organizations2.default.UPDATING_ORGANIZATION,
	      item: item
	    });
	
	    var url = '/organizations' + (!!item.id ? '/' + item.id : '');
	    return _ApiClient2.default.put(url, { data: data }).then(function (item) {
	      dispatch({
	        type: _organizations2.default.UPDATED_ORGANIZATION,
	        item: item
	      });
	    }).catch(function (errors) {
	      dispatch({
	        type: _organizations2.default.UPDATED_ORGANIZATION_ERROR,
	        errors: errors
	      });
	    });
	  };
	};
	
	var _getUpdatedItem = function _getUpdatedItem(dispatch, actionType, _ref) {
	  var id = _ref.data.id;
	
	  return _ApiClient2.default.get('/organizations/' + id).then(function (item) {
	    return dispatch({
	      type: actionType,
	      item: item
	    });
	  });
	};
	
	var actions = exports.actions = {
	  getItems: getItems,
	  saveItem: saveItem
	};
	
	function reducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
	  var action = arguments[1];
	
	  var newState = (0, _assign2.default)({}, state);
	  switch (action.type) {
	    case _organizations2.default.REQUESTING_ORGANIZATIONS:
	      return (0, _assign2.default)({}, state, {
	        isRequesting: true,
	        errors: false
	      });
	
	    case _organizations2.default.RECEIVED_ORGANIZATIONS:
	      return (0, _assign2.default)({}, state, {
	        isRequesting: false,
	        hasReceived: true,
	        items: action.items
	      });
	
	    case _organizations2.default.RECEIVED_ORGANIZATIONS_ERROR:
	      return (0, _assign2.default)({}, state, {
	        isRequesting: false,
	        errors: action.errors
	      });
	
	    case _organizations2.default.UPDATING_ORGANIZATION:
	      return function () {
	        return (0, _assign2.default)({}, state, {
	          errors: false,
	          isSaving: true
	        });
	      }();
	
	    case _organizations2.default.UPDATED_ORGANIZATION:
	      return function () {
	        // Avoids duplicates
	        var items = (0, _upsertById2.default)(action.item, state.items);
	        return (0, _assign2.default)({}, state, {
	          items: items,
	          isSaving: false
	        });
	      }();
	
	    default:
	      return state;
	  }
	};

/***/ }),
/* 663 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _GenerateActionTypes = __webpack_require__(526);
	
	var _GenerateActionTypes2 = _interopRequireDefault(_GenerateActionTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ACTION_TYPES = (0, _GenerateActionTypes2.default)('ORGANIZATION');
	exports.default = ACTION_TYPES;

/***/ }),
/* 664 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _FlatButton = __webpack_require__(665);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _FlatButton2.default;

/***/ }),
/* 665 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _childUtils = __webpack_require__(550);
	
	var _colorManipulator = __webpack_require__(410);
	
	var _EnhancedButton = __webpack_require__(549);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _FlatButtonLabel = __webpack_require__(666);
	
	var _FlatButtonLabel2 = _interopRequireDefault(_FlatButtonLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateLabel(props, propName, componentName) {
	  if (true) {
	    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
	      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	    }
	  }
	}
	
	var FlatButton = function (_Component) {
	  (0, _inherits3.default)(FlatButton, _Component);
	
	  function FlatButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, FlatButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FlatButton.__proto__ || (0, _getPrototypeOf2.default)(FlatButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      isKeyboardFocused: false,
	      touch: false
	    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
	      _this.setState({ isKeyboardFocused: isKeyboardFocused });
	      _this.props.onKeyboardFocus(event, isKeyboardFocused);
	    }, _this.handleMouseEnter = function (event) {
	      // Cancel hover styles for touch devices
	      if (!_this.state.touch) _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({ touch: true });
	      _this.props.onTouchStart(event);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(FlatButton, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.disabled) {
	        this.setState({
	          hovered: false
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          backgroundColor = _props.backgroundColor,
	          children = _props.children,
	          disabled = _props.disabled,
	          fullWidth = _props.fullWidth,
	          hoverColor = _props.hoverColor,
	          icon = _props.icon,
	          label = _props.label,
	          labelStyle = _props.labelStyle,
	          labelPosition = _props.labelPosition,
	          primary = _props.primary,
	          rippleColor = _props.rippleColor,
	          secondary = _props.secondary,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'children', 'disabled', 'fullWidth', 'hoverColor', 'icon', 'label', 'labelStyle', 'labelPosition', 'primary', 'rippleColor', 'secondary', 'style']);
	      var _context$muiTheme = this.context.muiTheme,
	          borderRadius = _context$muiTheme.borderRadius,
	          _context$muiTheme$but = _context$muiTheme.button,
	          buttonHeight = _context$muiTheme$but.height,
	          buttonMinWidth = _context$muiTheme$but.minWidth,
	          buttonTextTransform = _context$muiTheme$but.textTransform,
	          _context$muiTheme$fla = _context$muiTheme.flatButton,
	          buttonFilterColor = _context$muiTheme$fla.buttonFilterColor,
	          buttonColor = _context$muiTheme$fla.color,
	          disabledTextColor = _context$muiTheme$fla.disabledTextColor,
	          fontSize = _context$muiTheme$fla.fontSize,
	          fontWeight = _context$muiTheme$fla.fontWeight,
	          primaryTextColor = _context$muiTheme$fla.primaryTextColor,
	          secondaryTextColor = _context$muiTheme$fla.secondaryTextColor,
	          textColor = _context$muiTheme$fla.textColor,
	          _context$muiTheme$fla2 = _context$muiTheme$fla.textTransform,
	          textTransform = _context$muiTheme$fla2 === undefined ? buttonTextTransform || 'uppercase' : _context$muiTheme$fla2;
	
	      var defaultTextColor = disabled ? disabledTextColor : primary ? primaryTextColor : secondary ? secondaryTextColor : textColor;
	
	      var defaultHoverColor = (0, _colorManipulator.fade)(buttonFilterColor, 0.2);
	      var defaultRippleColor = buttonFilterColor;
	      var buttonHoverColor = hoverColor || defaultHoverColor;
	      var buttonRippleColor = rippleColor || defaultRippleColor;
	      var buttonBackgroundColor = backgroundColor || buttonColor;
	      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        height: buttonHeight,
	        lineHeight: buttonHeight + 'px',
	        minWidth: fullWidth ? '100%' : buttonMinWidth,
	        color: defaultTextColor,
	        transition: _transitions2.default.easeOut(),
	        borderRadius: borderRadius,
	        userSelect: 'none',
	        overflow: 'hidden',
	        backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
	        padding: 0,
	        margin: 0,
	        textAlign: 'center'
	      }, style);
	
	      var iconCloned = void 0;
	      var labelStyleIcon = {};
	
	      if (icon) {
	        var iconStyles = (0, _simpleAssign2.default)({
	          verticalAlign: 'middle',
	          marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	          marginRight: label && labelPosition === 'before' ? 12 : 0
	        }, icon.props.style);
	        iconCloned = _react2.default.cloneElement(icon, {
	          color: icon.props.color || mergedRootStyles.color,
	          style: iconStyles
	        });
	
	        if (labelPosition === 'before') {
	          labelStyleIcon.paddingRight = 8;
	        } else {
	          labelStyleIcon.paddingLeft = 8;
	        }
	      }
	
	      var mergedLabelStyles = (0, _simpleAssign2.default)({
	        letterSpacing: 0,
	        textTransform: textTransform,
	        fontWeight: fontWeight,
	        fontSize: fontSize
	      }, labelStyleIcon, labelStyle);
	
	      var labelElement = label ? _react2.default.createElement(_FlatButtonLabel2.default, { label: label, style: mergedLabelStyles }) : undefined;
	
	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };
	
	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);
	
	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        (0, _extends3.default)({}, other, {
	          disabled: disabled,
	          focusRippleColor: buttonRippleColor,
	          focusRippleOpacity: 0.3,
	          onKeyboardFocus: this.handleKeyboardFocus,
	          onMouseLeave: this.handleMouseLeave,
	          onMouseEnter: this.handleMouseEnter,
	          onTouchStart: this.handleTouchStart,
	          style: mergedRootStyles,
	          touchRippleColor: buttonRippleColor,
	          touchRippleOpacity: 0.3
	        }),
	        enhancedButtonChildren
	      );
	    }
	  }]);
	  return FlatButton;
	}(_react.Component);
	
	FlatButton.muiName = 'FlatButton';
	FlatButton.defaultProps = {
	  disabled: false,
	  fullWidth: false,
	  labelStyle: {},
	  labelPosition: 'after',
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onTouchStart: function onTouchStart() {},
	  primary: false,
	  secondary: false
	};
	FlatButton.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? FlatButton.propTypes = {
	  /**
	   * Color of button when mouse is not hovering over it.
	   */
	  backgroundColor: _propTypes2.default.string,
	  /**
	   * This is what will be displayed inside the button.
	   * If a label is specified, the text within the label prop will
	   * be displayed. Otherwise, the component will expect children
	   * which will then be displayed. (In our example,
	   * we are nesting an `<input type="file" />` and a `span`
	   * that acts as our label to be displayed.) This only
	   * applies to flat and raised buttons.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * The element to use as the container for the FlatButton. Either a string to
	   * use a DOM element or a ReactElement. This is useful for wrapping the
	   * FlatButton in a custom Link component. If a ReactElement is given, ensure
	   * that it passes all of its given props through to the underlying DOM
	   * element and renders its children prop for proper integration.
	   */
	  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	  /**
	   * If true, the element's ripple effect will be disabled.
	   */
	  disableTouchRipple: _propTypes2.default.bool,
	  /**
	   * Disables the button if set to true.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * If true, the button will take up the full width of its container.
	   */
	  fullWidth: _propTypes2.default.bool,
	  /**
	   * Color of button when mouse hovers over.
	   */
	  hoverColor: _propTypes2.default.string,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _propTypes2.default.string,
	  /**
	   * Use this property to display an icon.
	   */
	  icon: _propTypes2.default.node,
	  /**
	   * Label for the button.
	   */
	  label: validateLabel,
	  /**
	   * Place label before or after the passed children.
	   */
	  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _propTypes2.default.object,
	  /**
	   * Callback function fired when the element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the element.
	   * @param {boolean} isKeyboardFocused Indicates whether the element is focused.
	   */
	  onKeyboardFocus: _propTypes2.default.func,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /** @ignore */
	  onTouchStart: _propTypes2.default.func,
	  /**
	   * Callback function fired when the button is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the button.
	   */
	  onTouchTap: _propTypes2.default.func,
	  /**
	   * If true, colors button according to
	   * primaryTextColor from the Theme.
	   */
	  primary: _propTypes2.default.bool,
	  /**
	   * Color for the ripple after button is clicked.
	   */
	  rippleColor: _propTypes2.default.string,
	  /**
	   * If true, colors button according to secondaryTextColor from the theme.
	   * The primary prop has precendent if set to true.
	   */
	  secondary: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = FlatButton;

/***/ }),
/* 666 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;
	
	
	  return {
	    root: {
	      position: 'relative',
	      paddingLeft: baseTheme.spacing.desktopGutterLess,
	      paddingRight: baseTheme.spacing.desktopGutterLess,
	      verticalAlign: 'middle'
	    }
	  };
	}
	
	var FlatButtonLabel = function (_Component) {
	  (0, _inherits3.default)(FlatButtonLabel, _Component);
	
	  function FlatButtonLabel() {
	    (0, _classCallCheck3.default)(this, FlatButtonLabel);
	    return (0, _possibleConstructorReturn3.default)(this, (FlatButtonLabel.__proto__ || (0, _getPrototypeOf2.default)(FlatButtonLabel)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(FlatButtonLabel, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          label = _props.label,
	          style = _props.style;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	        label
	      );
	    }
	  }]);
	  return FlatButtonLabel;
	}(_react.Component);
	
	FlatButtonLabel.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? FlatButtonLabel.propTypes = {
	  label: _propTypes2.default.node,
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = FlatButtonLabel;

/***/ }),
/* 667 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSet = __webpack_require__(637);
	
	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `_.setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, ['x', '0', 'y', 'z'], 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  return object == null ? object : baseSet(object, path, value);
	}
	
	module.exports = set;


/***/ }),
/* 668 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	__webpack_require__(669);
	
	var _Toggle = __webpack_require__(533);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	var _Select = __webpack_require__(671);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _UserRolesList = __webpack_require__(686);
	
	var _UserRolesList2 = _interopRequireDefault(_UserRolesList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EditUserComponent = function EditUserComponent(props) {
	  var _props$user = props.user,
	      id = _props$user.id,
	      email = _props$user.email,
	      _props$user$userProfi = _props$user.userProfile,
	      enabled = _props$user$userProfi.enabled,
	      roles = _props$user$userProfi.roles,
	      organizationId = _props$user$userProfi.organizationId;
	
	  var label = enabled ? 'Enabled' : 'Disabled';
	  var toggleEnabled = function toggleEnabled() {
	    props.onChange('userProfile', { enabled: !enabled });
	  };
	
	  var onChangeOrg = function onChangeOrg(evt, organizationId) {
	    props.onChange('userProfile', { organizationId: organizationId });
	  };
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'edit-user-component' },
	    _react2.default.createElement(_Toggle2.default, { labelPosition: 'right', label: label, onToggle: toggleEnabled, toggled: enabled }),
	    'id: ',
	    id,
	    _react2.default.createElement('br', null),
	    'Email: ',
	    email,
	    _react2.default.createElement('br', null),
	    'Organization: ',
	    _react2.default.createElement(_Select2.default, { onChange: onChangeOrg, selectedId: organizationId, organizations: props.organizations }),
	    _react2.default.createElement(
	      'paper',
	      null,
	      'Roles: ',
	      _react2.default.createElement(_UserRolesList2.default, { selected: roles, roles: props.roles })
	    )
	  );
	};
	
	EditUserComponent.propTypes = {
	  onChange: _propTypes2.default.func.isRequired,
	  user: _propTypes2.default.object.isRequired,
	  organizations: _propTypes2.default.array.isRequired,
	  roles: _propTypes2.default.array.isRequired
	};
	
	exports.default = EditUserComponent;

/***/ }),
/* 669 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(670);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(468)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(670, function() {
				var newContent = __webpack_require__(670);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 670 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(467)();
	// imports
	
	
	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"EditUserComponent.scss","sourceRoot":""}]);
	
	// exports


/***/ }),
/* 671 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SelectField = __webpack_require__(672);
	
	var _SelectField2 = _interopRequireDefault(_SelectField);
	
	var _MenuItem = __webpack_require__(585);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Select = function Select(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _SelectField2.default,
	      { floatingLabelText: 'Organization', onChange: props.onChange, value: props.selectedId },
	      props.organizations.map(function (org) {
	        return _react2.default.createElement(_MenuItem2.default, { value: org.id, primaryText: org.name });
	      })
	    )
	  );
	};
	
	Select.propTypes = {
	  onChange: _propTypes2.default.func.isRequired,
	  selectedId: _propTypes2.default.string,
	  organizations: _propTypes2.default.array.isRequired
	};
	
	exports.default = Select;

/***/ }),
/* 672 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _SelectField = __webpack_require__(673);
	
	var _SelectField2 = _interopRequireDefault(_SelectField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _SelectField2.default;

/***/ }),
/* 673 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _TextField = __webpack_require__(674);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _DropDownMenu = __webpack_require__(680);
	
	var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props) {
	  return {
	    label: {
	      paddingLeft: 0,
	      top: props.floatingLabelText ? 6 : -4
	    },
	    icon: {
	      right: 0,
	      top: props.floatingLabelText ? 8 : 0
	    },
	    hideDropDownUnderline: {
	      borderTop: 'none'
	    },
	    dropDownMenu: {
	      display: 'block'
	    }
	  };
	}
	
	var SelectField = function (_Component) {
	  (0, _inherits3.default)(SelectField, _Component);
	
	  function SelectField() {
	    (0, _classCallCheck3.default)(this, SelectField);
	    return (0, _possibleConstructorReturn3.default)(this, (SelectField.__proto__ || (0, _getPrototypeOf2.default)(SelectField)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(SelectField, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          autoWidth = _props.autoWidth,
	          multiple = _props.multiple,
	          children = _props.children,
	          style = _props.style,
	          labelStyle = _props.labelStyle,
	          iconStyle = _props.iconStyle,
	          id = _props.id,
	          underlineDisabledStyle = _props.underlineDisabledStyle,
	          underlineFocusStyle = _props.underlineFocusStyle,
	          menuItemStyle = _props.menuItemStyle,
	          selectedMenuItemStyle = _props.selectedMenuItemStyle,
	          underlineStyle = _props.underlineStyle,
	          dropDownMenuProps = _props.dropDownMenuProps,
	          errorStyle = _props.errorStyle,
	          disabled = _props.disabled,
	          floatingLabelFixed = _props.floatingLabelFixed,
	          floatingLabelText = _props.floatingLabelText,
	          floatingLabelStyle = _props.floatingLabelStyle,
	          hintStyle = _props.hintStyle,
	          hintText = _props.hintText,
	          fullWidth = _props.fullWidth,
	          errorText = _props.errorText,
	          listStyle = _props.listStyle,
	          maxHeight = _props.maxHeight,
	          menuStyle = _props.menuStyle,
	          onFocus = _props.onFocus,
	          onBlur = _props.onBlur,
	          onChange = _props.onChange,
	          selectionRenderer = _props.selectionRenderer,
	          value = _props.value,
	          other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'multiple', 'children', 'style', 'labelStyle', 'iconStyle', 'id', 'underlineDisabledStyle', 'underlineFocusStyle', 'menuItemStyle', 'selectedMenuItemStyle', 'underlineStyle', 'dropDownMenuProps', 'errorStyle', 'disabled', 'floatingLabelFixed', 'floatingLabelText', 'floatingLabelStyle', 'hintStyle', 'hintText', 'fullWidth', 'errorText', 'listStyle', 'maxHeight', 'menuStyle', 'onFocus', 'onBlur', 'onChange', 'selectionRenderer', 'value']);
	
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        _TextField2.default,
	        (0, _extends3.default)({}, other, {
	          style: style,
	          disabled: disabled,
	          floatingLabelFixed: floatingLabelFixed,
	          floatingLabelText: floatingLabelText,
	          floatingLabelStyle: floatingLabelStyle,
	          hintStyle: hintStyle,
	          hintText: !hintText && !floatingLabelText ? ' ' : hintText,
	          fullWidth: fullWidth,
	          errorText: errorText,
	          underlineStyle: underlineStyle,
	          errorStyle: errorStyle,
	          onFocus: onFocus,
	          onBlur: onBlur,
	          id: id,
	          underlineDisabledStyle: underlineDisabledStyle,
	          underlineFocusStyle: underlineFocusStyle
	        }),
	        _react2.default.createElement(
	          _DropDownMenu2.default,
	          (0, _extends3.default)({
	            disabled: disabled,
	            style: (0, _simpleAssign2.default)(styles.dropDownMenu, menuStyle),
	            labelStyle: (0, _simpleAssign2.default)(styles.label, labelStyle),
	            iconStyle: (0, _simpleAssign2.default)(styles.icon, iconStyle),
	            menuItemStyle: menuItemStyle,
	            selectedMenuItemStyle: selectedMenuItemStyle,
	            underlineStyle: styles.hideDropDownUnderline,
	            listStyle: listStyle,
	            autoWidth: autoWidth,
	            value: value,
	            onChange: onChange,
	            maxHeight: maxHeight,
	            multiple: multiple,
	            selectionRenderer: selectionRenderer
	          }, dropDownMenuProps),
	          children
	        )
	      );
	    }
	  }]);
	  return SelectField;
	}(_react.Component);
	
	SelectField.defaultProps = {
	  autoWidth: false,
	  disabled: false,
	  fullWidth: false,
	  multiple: false
	};
	SelectField.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? SelectField.propTypes = {
	  /**
	   * If true, the width will automatically be set according to the
	   * items inside the menu.
	   * To control the width in CSS instead, leave this prop set to `false`.
	   */
	  autoWidth: _propTypes2.default.bool,
	  /**
	   * The `MenuItem` elements to populate the select field with.
	   * If the menu items have a `label` prop, that value will
	   * represent the selected menu item in the rendered select field.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * If true, the select field will be disabled.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * Object that can handle and override any property of component DropDownMenu.
	   */
	  dropDownMenuProps: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the error element.
	   */
	  errorStyle: _propTypes2.default.object,
	  /**
	   * The error content to display.
	   */
	  errorText: _propTypes2.default.node,
	  /**
	   * If true, the floating label will float even when no value is selected.
	   */
	  floatingLabelFixed: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the floating label.
	   */
	  floatingLabelStyle: _propTypes2.default.object,
	  /**
	   * The content of the floating label.
	   */
	  floatingLabelText: _propTypes2.default.node,
	  /**
	   * If true, the select field will take up the full width of its container.
	   */
	  fullWidth: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the hint element.
	   */
	  hintStyle: _propTypes2.default.object,
	  /**
	   * The hint content to display.
	   */
	  hintText: _propTypes2.default.node,
	  /**
	   * Override the inline-styles of the icon element.
	   */
	  iconStyle: _propTypes2.default.object,
	  /**
	   * The id prop for the text field.
	   */
	  id: _propTypes2.default.string,
	  /**
	   * Override the label style when the select field is inactive.
	   */
	  labelStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the underlying `List` element.
	   */
	  listStyle: _propTypes2.default.object,
	  /**
	   * Override the default max-height of the underlying `DropDownMenu` element.
	   */
	  maxHeight: _propTypes2.default.number,
	  /**
	   * Override the inline-styles of menu items.
	   */
	  menuItemStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the underlying `DropDownMenu` element.
	   */
	  menuStyle: _propTypes2.default.object,
	  /**
	   * If true, `value` must be an array and the menu will support
	   * multiple selections.
	   */
	  multiple: _propTypes2.default.bool,
	  /** @ignore */
	  onBlur: _propTypes2.default.func,
	  /**
	   * Callback function fired when a menu item is selected.
	   *
	   * @param {object} event TouchTap event targeting the menu item
	   * that was selected.
	   * @param {number} key The index of the selected menu item, or undefined
	   * if `multiple` is true.
	   * @param {any} payload If `multiple` is true, the menu's `value`
	   * array with either the menu item's `value` added (if
	   * it wasn't already selected) or omitted (if it was already selected).
	   * Otherwise, the `value` of the menu item.
	   */
	  onChange: _propTypes2.default.func,
	  /** @ignore */
	  onFocus: _propTypes2.default.func,
	  /**
	   * Override the inline-styles of selected menu items.
	   */
	  selectedMenuItemStyle: _propTypes2.default.object,
	  /**
	   * Customize the rendering of the selected item.
	   *
	   * @param {any} value If `multiple` is true, the menu's `value`
	   * array with either the menu item's `value` added (if
	   * it wasn't already selected) or omitted (if it was already selected).
	   * Otherwise, the `value` of the menu item.
	   */
	  selectionRenderer: _propTypes2.default.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the underline element when the select
	   * field is disabled.
	   */
	  underlineDisabledStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the underline element when the select field
	   * is focused.
	   */
	  underlineFocusStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the underline element.
	   */
	  underlineStyle: _propTypes2.default.object,
	  /**
	   * If `multiple` is true, an array of the `value`s of the selected
	   * menu items. Otherwise, the `value` of the selected menu item.
	   * If provided, the menu will be a controlled component.
	   */
	  value: _propTypes2.default.any
	} : void 0;
	exports.default = SelectField;

/***/ }),
/* 674 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _TextField = __webpack_require__(675);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _TextField2.default;

/***/ }),
/* 675 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(59);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(537);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _EnhancedTextarea = __webpack_require__(676);
	
	var _EnhancedTextarea2 = _interopRequireDefault(_EnhancedTextarea);
	
	var _TextFieldHint = __webpack_require__(677);
	
	var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);
	
	var _TextFieldLabel = __webpack_require__(678);
	
	var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);
	
	var _TextFieldUnderline = __webpack_require__(679);
	
	var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);
	
	var _warning = __webpack_require__(239);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getStyles = function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      _context$muiTheme$tex = _context$muiTheme.textField,
	      floatingLabelColor = _context$muiTheme$tex.floatingLabelColor,
	      focusColor = _context$muiTheme$tex.focusColor,
	      textColor = _context$muiTheme$tex.textColor,
	      disabledTextColor = _context$muiTheme$tex.disabledTextColor,
	      backgroundColor = _context$muiTheme$tex.backgroundColor,
	      errorColor = _context$muiTheme$tex.errorColor;
	
	
	  var styles = {
	    root: {
	      fontSize: 16,
	      lineHeight: '24px',
	      width: props.fullWidth ? '100%' : 256,
	      height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
	      display: 'inline-block',
	      position: 'relative',
	      backgroundColor: backgroundColor,
	      fontFamily: baseTheme.fontFamily,
	      transition: _transitions2.default.easeOut('200ms', 'height'),
	      cursor: props.disabled ? 'not-allowed' : 'auto'
	    },
	    error: {
	      position: 'relative',
	      bottom: 2,
	      fontSize: 12,
	      lineHeight: '12px',
	      color: errorColor,
	      transition: _transitions2.default.easeOut()
	    },
	    floatingLabel: {
	      color: props.disabled ? disabledTextColor : floatingLabelColor,
	      pointerEvents: 'none'
	    },
	    input: {
	      padding: 0,
	      position: 'relative',
	      width: '100%',
	      border: 'none',
	      outline: 'none',
	      backgroundColor: 'rgba(0,0,0,0)',
	      color: props.disabled ? disabledTextColor : textColor,
	      cursor: 'inherit',
	      font: 'inherit',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)' },
	    inputNative: {
	      appearance: 'textfield' }
	  };
	
	  styles.textarea = (0, _simpleAssign2.default)({}, styles.input, {
	    marginTop: props.floatingLabelText ? 36 : 12,
	    marginBottom: props.floatingLabelText ? -36 : -12,
	    boxSizing: 'border-box',
	    font: 'inherit'
	  });
	
	  // Do not assign a height to the textarea as he handles it on his own.
	  styles.input.height = '100%';
	
	  if (state.isFocused) {
	    styles.floatingLabel.color = focusColor;
	  }
	
	  if (props.floatingLabelText) {
	    styles.input.boxSizing = 'border-box';
	
	    if (!props.multiLine) {
	      styles.input.marginTop = 14;
	    }
	
	    if (state.errorText) {
	      styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
	    }
	  }
	
	  if (state.errorText) {
	    if (state.isFocused) {
	      styles.floatingLabel.color = styles.error.color;
	    }
	  }
	
	  return styles;
	};
	
	/**
	 * Check if a value is valid to be displayed inside an input.
	 *
	 * @param The value to check.
	 * @returns True if the string provided is valid, false otherwise.
	 */
	function isValid(value) {
	  return value !== '' && value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0);
	}
	
	var TextField = function (_Component) {
	  (0, _inherits3.default)(TextField, _Component);
	
	  function TextField() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, TextField);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isFocused: false,
	      errorText: undefined,
	      hasValue: false
	    }, _this.handleInputBlur = function (event) {
	      _this.setState({ isFocused: false });
	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }
	    }, _this.handleInputChange = function (event) {
	      if (!_this.props.hasOwnProperty('value')) {
	        _this.setState({ hasValue: isValid(event.target.value) });
	      }
	      if (_this.props.onChange) {
	        _this.props.onChange(event, event.target.value);
	      }
	    }, _this.handleInputFocus = function (event) {
	      if (_this.props.disabled) {
	        return;
	      }
	      _this.setState({ isFocused: true });
	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    }, _this.handleHeightChange = function (event, height) {
	      var newHeight = height + 24;
	      if (_this.props.floatingLabelText) {
	        newHeight += 24;
	      }
	      _reactDom2.default.findDOMNode(_this).style.height = newHeight + 'px';
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(TextField, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          children = _props.children,
	          name = _props.name,
	          hintText = _props.hintText,
	          floatingLabelText = _props.floatingLabelText,
	          id = _props.id;
	
	
	      var propsLeaf = children ? children.props : this.props;
	
	      this.setState({
	        errorText: this.props.errorText,
	        hasValue: isValid(propsLeaf.value) || isValid(propsLeaf.defaultValue)
	      });
	
	       true ? (0, _warning2.default)(name || hintText || floatingLabelText || id, 'Material-UI: We don\'t have enough information\n      to build a robust unique id for the TextField component. Please provide an id or a name.') : void 0;
	
	      var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
	      this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.errorText !== this.props.errorText) {
	        this.setState({
	          errorText: nextProps.errorText
	        });
	      }
	
	      if (nextProps.children && nextProps.children.props) {
	        nextProps = nextProps.children.props;
	      }
	
	      if (nextProps.hasOwnProperty('value')) {
	        var hasValue = isValid(nextProps.value);
	
	        this.setState({
	          hasValue: hasValue
	        });
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	    }
	  }, {
	    key: 'blur',
	    value: function blur() {
	      if (this.input) {
	        this.getInputNode().blur();
	      }
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (this.input) {
	        this.getInputNode().focus();
	      }
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      if (this.input) {
	        this.getInputNode().select();
	      }
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.input ? this.getInputNode().value : undefined;
	    }
	  }, {
	    key: 'getInputNode',
	    value: function getInputNode() {
	      return this.props.children || this.props.multiLine ? this.input.getInputNode() : _reactDom2.default.findDOMNode(this.input);
	    }
	  }, {
	    key: '_isControlled',
	    value: function _isControlled() {
	      return this.props.hasOwnProperty('value');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props2 = this.props,
	          children = _props2.children,
	          className = _props2.className,
	          disabled = _props2.disabled,
	          errorStyle = _props2.errorStyle,
	          errorText = _props2.errorText,
	          floatingLabelFixed = _props2.floatingLabelFixed,
	          floatingLabelFocusStyle = _props2.floatingLabelFocusStyle,
	          floatingLabelShrinkStyle = _props2.floatingLabelShrinkStyle,
	          floatingLabelStyle = _props2.floatingLabelStyle,
	          floatingLabelText = _props2.floatingLabelText,
	          fullWidth = _props2.fullWidth,
	          hintText = _props2.hintText,
	          hintStyle = _props2.hintStyle,
	          id = _props2.id,
	          inputStyle = _props2.inputStyle,
	          multiLine = _props2.multiLine,
	          onBlur = _props2.onBlur,
	          onChange = _props2.onChange,
	          onFocus = _props2.onFocus,
	          style = _props2.style,
	          type = _props2.type,
	          underlineDisabledStyle = _props2.underlineDisabledStyle,
	          underlineFocusStyle = _props2.underlineFocusStyle,
	          underlineShow = _props2.underlineShow,
	          underlineStyle = _props2.underlineStyle,
	          rows = _props2.rows,
	          rowsMax = _props2.rowsMax,
	          textareaStyle = _props2.textareaStyle,
	          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelShrinkStyle', 'floatingLabelStyle', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'inputStyle', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax', 'textareaStyle']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var inputId = id || this.uniqueId;
	
	      var errorTextElement = this.state.errorText && _react2.default.createElement(
	        'div',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.error, errorStyle)) },
	        this.state.errorText
	      );
	
	      var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
	        _TextFieldLabel2.default,
	        {
	          muiTheme: this.context.muiTheme,
	          style: (0, _simpleAssign2.default)(styles.floatingLabel, floatingLabelStyle, this.state.isFocused ? floatingLabelFocusStyle : null),
	          shrinkStyle: floatingLabelShrinkStyle,
	          htmlFor: inputId,
	          shrink: this.state.hasValue || this.state.isFocused || floatingLabelFixed,
	          disabled: disabled
	        },
	        floatingLabelText
	      );
	
	      var inputProps = {
	        id: inputId,
	        ref: function ref(elem) {
	          return _this2.input = elem;
	        },
	        disabled: this.props.disabled,
	        onBlur: this.handleInputBlur,
	        onChange: this.handleInputChange,
	        onFocus: this.handleInputFocus
	      };
	
	      var childStyleMerged = (0, _simpleAssign2.default)(styles.input, inputStyle);
	
	      var inputElement = void 0;
	      if (children) {
	        inputElement = _react2.default.cloneElement(children, (0, _extends3.default)({}, inputProps, children.props, {
	          style: (0, _simpleAssign2.default)(childStyleMerged, children.props.style)
	        }));
	      } else {
	        inputElement = multiLine ? _react2.default.createElement(_EnhancedTextarea2.default, (0, _extends3.default)({
	          style: childStyleMerged,
	          textareaStyle: (0, _simpleAssign2.default)(styles.textarea, styles.inputNative, textareaStyle),
	          rows: rows,
	          rowsMax: rowsMax,
	          hintText: hintText
	        }, other, inputProps, {
	          onHeightChange: this.handleHeightChange
	        })) : _react2.default.createElement('input', (0, _extends3.default)({
	          type: type,
	          style: prepareStyles((0, _simpleAssign2.default)(styles.inputNative, childStyleMerged))
	        }, other, inputProps));
	      }
	
	      var rootProps = {};
	
	      if (children) {
	        rootProps = other;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, rootProps, {
	          className: className,
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
	        }),
	        floatingLabelTextElement,
	        hintText ? _react2.default.createElement(_TextFieldHint2.default, {
	          muiTheme: this.context.muiTheme,
	          show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused) || !this.state.hasValue && floatingLabelText && floatingLabelFixed && !this.state.isFocused,
	          style: hintStyle,
	          text: hintText
	        }) : null,
	        inputElement,
	        underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
	          disabled: disabled,
	          disabledStyle: underlineDisabledStyle,
	          error: !!this.state.errorText,
	          errorStyle: errorStyle,
	          focus: this.state.isFocused,
	          focusStyle: underlineFocusStyle,
	          muiTheme: this.context.muiTheme,
	          style: underlineStyle
	        }) : null,
	        errorTextElement
	      );
	    }
	  }]);
	  return TextField;
	}(_react.Component);
	
	TextField.defaultProps = {
	  disabled: false,
	  floatingLabelFixed: false,
	  multiLine: false,
	  fullWidth: false,
	  type: 'text',
	  underlineShow: true,
	  rows: 1
	};
	TextField.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? TextField.propTypes = {
	  children: _propTypes2.default.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * The text string to use for the default value.
	   */
	  defaultValue: _propTypes2.default.any,
	  /**
	   * Disables the text field if set to true.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * The style object to use to override error styles.
	   */
	  errorStyle: _propTypes2.default.object,
	  /**
	   * The error content to display.
	   */
	  errorText: _propTypes2.default.node,
	  /**
	   * If true, the floating label will float even when there is no value.
	   */
	  floatingLabelFixed: _propTypes2.default.bool,
	  /**
	   * The style object to use to override floating label styles when focused.
	   */
	  floatingLabelFocusStyle: _propTypes2.default.object,
	  /**
	   * The style object to use to override floating label styles when shrunk.
	   */
	  floatingLabelShrinkStyle: _propTypes2.default.object,
	  /**
	   * The style object to use to override floating label styles.
	   */
	  floatingLabelStyle: _propTypes2.default.object,
	  /**
	   * The content to use for the floating label element.
	   */
	  floatingLabelText: _propTypes2.default.node,
	  /**
	   * If true, the field receives the property width 100%.
	   */
	  fullWidth: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the TextField's hint text element.
	   */
	  hintStyle: _propTypes2.default.object,
	  /**
	   * The hint content to display.
	   */
	  hintText: _propTypes2.default.node,
	  /**
	   * The id prop for the text field.
	   */
	  id: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the TextField's input element.
	   * When multiLine is false: define the style of the input element.
	   * When multiLine is true: define the style of the container of the textarea.
	   */
	  inputStyle: _propTypes2.default.object,
	  /**
	   * If true, a textarea element will be rendered.
	   * The textarea also grows and shrinks according to the number of lines.
	   */
	  multiLine: _propTypes2.default.bool,
	  /**
	   * Name applied to the input.
	   */
	  name: _propTypes2.default.string,
	  /** @ignore */
	  onBlur: _propTypes2.default.func,
	  /**
	   * Callback function that is fired when the textfield's value changes.
	   *
	   * @param {object} event Change event targeting the text field.
	   * @param {string} newValue The new value of the text field.
	   */
	  onChange: _propTypes2.default.func,
	  /** @ignore */
	  onFocus: _propTypes2.default.func,
	  /**
	   * Number of rows to display when multiLine option is set to true.
	   */
	  rows: _propTypes2.default.number,
	  /**
	   * Maximum number of rows to display when
	   * multiLine option is set to true.
	   */
	  rowsMax: _propTypes2.default.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the TextField's textarea element.
	   * The TextField use either a textarea or an input,
	   * this property has effects only when multiLine is true.
	   */
	  textareaStyle: _propTypes2.default.object,
	  /**
	   * Specifies the type of input to display
	   * such as "password" or "text".
	   */
	  type: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the
	   * TextField's underline element when disabled.
	   */
	  underlineDisabledStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the TextField's
	   * underline element when focussed.
	   */
	  underlineFocusStyle: _propTypes2.default.object,
	  /**
	   * If true, shows the underline for the text field.
	   */
	  underlineShow: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the TextField's underline element.
	   */
	  underlineStyle: _propTypes2.default.object,
	  /**
	   * The value of the text field.
	   */
	  value: _propTypes2.default.any
	} : void 0;
	exports.default = TextField;

/***/ }),
/* 676 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactEventListener = __webpack_require__(507);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rowsHeight = 24;
	
	function getStyles(props, context, state) {
	  return {
	    root: {
	      position: 'relative' },
	    textarea: {
	      height: state.height,
	      width: '100%',
	      resize: 'none',
	      font: 'inherit',
	      padding: 0,
	      cursor: 'inherit'
	    },
	    shadow: {
	      resize: 'none',
	      // Overflow also needed to here to remove the extra row
	      // added to textareas in Firefox.
	      overflow: 'hidden',
	      // Visibility needed to hide the extra text area on ipads
	      visibility: 'hidden',
	      position: 'absolute',
	      height: 'auto'
	    }
	  };
	}
	
	var EnhancedTextarea = function (_Component) {
	  (0, _inherits3.default)(EnhancedTextarea, _Component);
	
	  function EnhancedTextarea() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, EnhancedTextarea);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedTextarea.__proto__ || (0, _getPrototypeOf2.default)(EnhancedTextarea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      height: null
	    }, _this.handleResize = function (event) {
	      _this.syncHeightWithShadow(undefined, event);
	    }, _this.handleChange = function (event) {
	      _this.syncHeightWithShadow(event.target.value);
	
	      if (_this.props.hasOwnProperty('valueLink')) {
	        _this.props.valueLink.requestChange(event.target.value);
	      }
	
	      if (_this.props.onChange) {
	        _this.props.onChange(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(EnhancedTextarea, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        height: this.props.rows * rowsHeight
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.syncHeightWithShadow();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.value !== this.props.value || nextProps.rowsMax !== this.props.rowsMax) {
	        this.syncHeightWithShadow(nextProps.value, null, nextProps);
	      }
	    }
	  }, {
	    key: 'getInputNode',
	    value: function getInputNode() {
	      return this.refs.input;
	    }
	  }, {
	    key: 'setValue',
	    value: function setValue(value) {
	      this.getInputNode().value = value;
	      this.syncHeightWithShadow(value);
	    }
	  }, {
	    key: 'syncHeightWithShadow',
	    value: function syncHeightWithShadow(newValue, event, props) {
	      var shadow = this.refs.shadow;
	      var displayText = this.props.hintText && (newValue === '' || newValue === undefined || newValue === null) ? this.props.hintText : newValue;
	
	      if (displayText !== undefined) {
	        shadow.value = displayText;
	      }
	
	      var newHeight = shadow.scrollHeight;
	
	      // Guarding for jsdom, where scrollHeight isn't present.
	      // See https://github.com/tmpvar/jsdom/issues/1013
	      if (newHeight === undefined) return;
	
	      props = props || this.props;
	
	      if (props.rowsMax >= props.rows) {
	        newHeight = Math.min(props.rowsMax * rowsHeight, newHeight);
	      }
	
	      newHeight = Math.max(newHeight, rowsHeight);
	
	      if (this.state.height !== newHeight) {
	        this.setState({
	          height: newHeight
	        });
	
	        if (props.onHeightChange) {
	          props.onHeightChange(event, newHeight);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          onChange = _props.onChange,
	          onHeightChange = _props.onHeightChange,
	          rows = _props.rows,
	          rowsMax = _props.rowsMax,
	          shadowStyle = _props.shadowStyle,
	          style = _props.style,
	          hintText = _props.hintText,
	          textareaStyle = _props.textareaStyle,
	          valueLink = _props.valueLink,
	          other = (0, _objectWithoutProperties3.default)(_props, ['onChange', 'onHeightChange', 'rows', 'rowsMax', 'shadowStyle', 'style', 'hintText', 'textareaStyle', 'valueLink']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var rootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var textareaStyles = (0, _simpleAssign2.default)(styles.textarea, textareaStyle);
	      var shadowStyles = (0, _simpleAssign2.default)({}, textareaStyles, styles.shadow, shadowStyle);
	
	      if (this.props.hasOwnProperty('valueLink')) {
	        other.value = this.props.valueLink.value;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { style: prepareStyles(rootStyles) },
	        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
	        _react2.default.createElement('textarea', {
	          ref: 'shadow',
	          style: prepareStyles(shadowStyles),
	          tabIndex: '-1',
	          rows: this.props.rows,
	          defaultValue: this.props.defaultValue,
	          readOnly: true,
	          value: this.props.value,
	          valueLink: this.props.valueLink
	        }),
	        _react2.default.createElement('textarea', (0, _extends3.default)({}, other, {
	          ref: 'input',
	          rows: this.props.rows,
	          style: prepareStyles(textareaStyles),
	          onChange: this.handleChange
	        }))
	      );
	    }
	  }]);
	  return EnhancedTextarea;
	}(_react.Component);
	
	EnhancedTextarea.defaultProps = {
	  rows: 1
	};
	EnhancedTextarea.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? EnhancedTextarea.propTypes = {
	  defaultValue: _propTypes2.default.any,
	  disabled: _propTypes2.default.bool,
	  hintText: _propTypes2.default.string,
	  onChange: _propTypes2.default.func,
	  onHeightChange: _propTypes2.default.func,
	  rows: _propTypes2.default.number,
	  rowsMax: _propTypes2.default.number,
	  shadowStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  textareaStyle: _propTypes2.default.object,
	  value: _propTypes2.default.string,
	  valueLink: _propTypes2.default.object
	} : void 0;
	exports.default = EnhancedTextarea;

/***/ }),
/* 677 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props) {
	  var hintColor = props.muiTheme.textField.hintColor,
	      show = props.show;
	
	
	  return {
	    root: {
	      position: 'absolute',
	      opacity: show ? 1 : 0,
	      color: hintColor,
	      transition: _transitions2.default.easeOut(),
	      bottom: 12
	    }
	  };
	}
	
	var TextFieldHint = function TextFieldHint(props) {
	  var prepareStyles = props.muiTheme.prepareStyles,
	      style = props.style,
	      text = props.text;
	
	
	  var styles = getStyles(props);
	
	  return _react2.default.createElement(
	    'div',
	    { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	    text
	  );
	};
	
	 true ? TextFieldHint.propTypes = {
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _propTypes2.default.object.isRequired,
	  /**
	   * True if the hint text should be visible.
	   */
	  show: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * The hint text displayed.
	   */
	  text: _propTypes2.default.node
	} : void 0;
	
	TextFieldHint.defaultProps = {
	  show: true
	};
	
	exports.default = TextFieldHint;

/***/ }),
/* 678 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props) {
	  var defaultStyles = {
	    position: 'absolute',
	    lineHeight: '22px',
	    top: 38,
	    transition: _transitions2.default.easeOut(),
	    zIndex: 1, // Needed to display label above Chrome's autocomplete field background
	    transform: 'scale(1) translate(0, 0)',
	    transformOrigin: 'left top',
	    pointerEvents: 'auto',
	    userSelect: 'none'
	  };
	
	  var shrinkStyles = props.shrink ? (0, _simpleAssign2.default)({
	    transform: 'scale(0.75) translate(0, -28px)',
	    pointerEvents: 'none'
	  }, props.shrinkStyle) : null;
	
	  return {
	    root: (0, _simpleAssign2.default)(defaultStyles, props.style, shrinkStyles)
	  };
	}
	
	var TextFieldLabel = function TextFieldLabel(props) {
	  var muiTheme = props.muiTheme,
	      className = props.className,
	      children = props.children,
	      htmlFor = props.htmlFor,
	      onTouchTap = props.onTouchTap;
	  var prepareStyles = muiTheme.prepareStyles;
	
	  var styles = getStyles(props);
	
	  return _react2.default.createElement(
	    'label',
	    {
	      className: className,
	      style: prepareStyles(styles.root),
	      htmlFor: htmlFor,
	      onTouchTap: onTouchTap
	    },
	    children
	  );
	};
	
	 true ? TextFieldLabel.propTypes = {
	  /**
	   * The label contents.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * Disables the label if set to true.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * The id of the target element that this label should refer to.
	   */
	  htmlFor: _propTypes2.default.string,
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _propTypes2.default.object.isRequired,
	  /**
	   * Callback function for when the label is selected via a touch tap.
	   *
	   * @param {object} event TouchTap event targeting the text field label.
	   */
	  onTouchTap: _propTypes2.default.func,
	  /**
	   * True if the floating label should shrink.
	   */
	  shrink: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element when shrunk.
	   */
	  shrinkStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	
	TextFieldLabel.defaultProps = {
	  disabled: false,
	  shrink: false
	};
	
	exports.default = TextFieldLabel;

/***/ }),
/* 679 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  /**
	   * True if the parent `TextField` is disabled.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` is disabled.
	   */
	  disabledStyle: _propTypes2.default.object,
	  /**
	   * True if the parent `TextField` has an error.
	   */
	  error: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` has an error.
	   */
	  errorStyle: _propTypes2.default.object,
	  /**
	   * True if the parent `TextField` is focused.
	   */
	  focus: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` is focused.
	   */
	  focusStyle: _propTypes2.default.object,
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _propTypes2.default.object.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	};
	
	var defaultProps = {
	  disabled: false,
	  disabledStyle: {},
	  error: false,
	  errorStyle: {},
	  focus: false,
	  focusStyle: {},
	  style: {}
	};
	
	var TextFieldUnderline = function TextFieldUnderline(props) {
	  var disabled = props.disabled,
	      disabledStyle = props.disabledStyle,
	      error = props.error,
	      errorStyle = props.errorStyle,
	      focus = props.focus,
	      focusStyle = props.focusStyle,
	      muiTheme = props.muiTheme,
	      style = props.style;
	  var errorStyleColor = errorStyle.color;
	  var prepareStyles = muiTheme.prepareStyles,
	      _muiTheme$textField = muiTheme.textField,
	      borderColor = _muiTheme$textField.borderColor,
	      disabledTextColor = _muiTheme$textField.disabledTextColor,
	      errorColor = _muiTheme$textField.errorColor,
	      focusColor = _muiTheme$textField.focusColor;
	
	
	  var styles = {
	    root: {
	      borderTop: 'none',
	      borderLeft: 'none',
	      borderRight: 'none',
	      borderBottom: 'solid 1px',
	      borderColor: borderColor,
	      bottom: 8,
	      boxSizing: 'content-box',
	      margin: 0,
	      position: 'absolute',
	      width: '100%'
	    },
	    disabled: {
	      borderBottom: 'dotted 2px',
	      borderColor: disabledTextColor
	    },
	    focus: {
	      borderBottom: 'solid 2px',
	      borderColor: focusColor,
	      transform: 'scaleX(0)',
	      transition: _transitions2.default.easeOut()
	    },
	    error: {
	      borderColor: errorStyleColor ? errorStyleColor : errorColor,
	      transform: 'scaleX(1)'
	    }
	  };
	
	  var underline = (0, _simpleAssign2.default)({}, styles.root, style);
	  var focusedUnderline = (0, _simpleAssign2.default)({}, underline, styles.focus, focusStyle);
	
	  if (disabled) underline = (0, _simpleAssign2.default)({}, underline, styles.disabled, disabledStyle);
	  if (focus) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, { transform: 'scaleX(1)' });
	  if (error) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, styles.error);
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement('hr', { style: prepareStyles(underline) }),
	    _react2.default.createElement('hr', { style: prepareStyles(focusedUnderline) })
	  );
	};
	
	 true ? TextFieldUnderline.propTypes = propTypes : void 0;
	TextFieldUnderline.defaultProps = defaultProps;
	
	exports.default = TextFieldUnderline;

/***/ }),
/* 680 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.MenuItem = exports.DropDownMenu = undefined;
	
	var _DropDownMenu2 = __webpack_require__(681);
	
	var _DropDownMenu3 = _interopRequireDefault(_DropDownMenu2);
	
	var _MenuItem2 = __webpack_require__(583);
	
	var _MenuItem3 = _interopRequireDefault(_MenuItem2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.DropDownMenu = _DropDownMenu3.default;
	exports.MenuItem = _MenuItem3.default;
	exports.default = _DropDownMenu3.default;

/***/ }),
/* 681 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(59);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _arrowDropDown = __webpack_require__(682);
	
	var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);
	
	var _Menu = __webpack_require__(576);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _ClearFix = __webpack_require__(683);
	
	var _ClearFix2 = _interopRequireDefault(_ClearFix);
	
	var _Popover = __webpack_require__(579);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _PopoverAnimationVertical = __webpack_require__(685);
	
	var _PopoverAnimationVertical2 = _interopRequireDefault(_PopoverAnimationVertical);
	
	var _keycode = __webpack_require__(510);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _events = __webpack_require__(552);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _IconButton = __webpack_require__(553);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _propTypes3 = __webpack_require__(503);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var disabled = props.disabled;
	
	  var spacing = context.muiTheme.baseTheme.spacing;
	  var palette = context.muiTheme.baseTheme.palette;
	  var accentColor = context.muiTheme.dropDownMenu.accentColor;
	  return {
	    control: {
	      cursor: disabled ? 'not-allowed' : 'pointer',
	      height: '100%',
	      position: 'relative',
	      width: '100%'
	    },
	    icon: {
	      fill: accentColor,
	      position: 'absolute',
	      right: spacing.desktopGutterLess,
	      top: (spacing.iconSize - 24) / 2 + spacing.desktopGutterMini / 2
	    },
	    iconChildren: {
	      fill: 'inherit'
	    },
	    label: {
	      color: disabled ? palette.disabledColor : palette.textColor,
	      height: spacing.desktopToolbarHeight + 'px',
	      lineHeight: spacing.desktopToolbarHeight + 'px',
	      overflow: 'hidden',
	      opacity: 1,
	      position: 'relative',
	      paddingLeft: spacing.desktopGutter,
	      paddingRight: spacing.iconSize * 2 + spacing.desktopGutterMini,
	      textOverflow: 'ellipsis',
	      top: 0,
	      whiteSpace: 'nowrap'
	    },
	    labelWhenOpen: {
	      opacity: 0,
	      top: spacing.desktopToolbarHeight / 8
	    },
	    root: {
	      display: 'inline-block',
	      fontSize: spacing.desktopDropDownMenuFontSize,
	      height: spacing.desktopSubheaderHeight,
	      fontFamily: context.muiTheme.baseTheme.fontFamily,
	      outline: 'none',
	      position: 'relative',
	      transition: _transitions2.default.easeOut()
	    },
	    rootWhenOpen: {
	      opacity: 1
	    },
	    underline: {
	      borderTop: 'solid 1px ' + accentColor,
	      bottom: 1,
	      left: 0,
	      margin: '-1px ' + spacing.desktopGutter + 'px',
	      right: 0,
	      position: 'absolute'
	    }
	  };
	}
	
	var DropDownMenu = function (_Component) {
	  (0, _inherits3.default)(DropDownMenu, _Component);
	
	  function DropDownMenu() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, DropDownMenu);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DropDownMenu.__proto__ || (0, _getPrototypeOf2.default)(DropDownMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _this.rootNode = undefined, _this.arrowNode = undefined, _this.handleTouchTapControl = function (event) {
	      event.preventDefault();
	      if (!_this.props.disabled) {
	        _this.setState({
	          open: !_this.state.open,
	          anchorEl: _this.rootNode
	        });
	      }
	    }, _this.handleRequestCloseMenu = function () {
	      _this.close(false);
	    }, _this.handleEscKeyDownMenu = function () {
	      _this.close(true);
	    }, _this.handleKeyDown = function (event) {
	      switch ((0, _keycode2.default)(event)) {
	        case 'up':
	        case 'down':
	        case 'space':
	        case 'enter':
	          event.preventDefault();
	          _this.setState({
	            open: true,
	            anchorEl: _this.rootNode
	          });
	          break;
	      }
	    }, _this.handleItemTouchTap = function (event, child, index) {
	      if (_this.props.multiple) {
	        if (!_this.state.open) {
	          _this.setState({ open: true });
	        }
	      } else {
	        event.persist();
	        _this.setState({
	          open: false
	        }, function () {
	          if (_this.props.onChange) {
	            _this.props.onChange(event, index, child.props.value);
	          }
	
	          _this.close(_events2.default.isKeyboard(event));
	        });
	      }
	    }, _this.handleChange = function (event, value) {
	      if (_this.props.multiple && _this.props.onChange) {
	        _this.props.onChange(event, undefined, value);
	      }
	    }, _this.close = function (isKeyboard) {
	      _this.setState({
	        open: false
	      }, function () {
	        if (_this.props.onClose) {
	          _this.props.onClose();
	        }
	
	        if (isKeyboard) {
	          var dropArrow = _this.arrowNode;
	          var dropNode = _reactDom2.default.findDOMNode(dropArrow);
	          dropNode.focus();
	          dropArrow.setKeyboardFocus(true);
	        }
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  // The nested styles for drop-down-menu are modified by toolbar and possibly
	  // other user components, so it will give full access to its js styles rather
	  // than just the parent.
	
	
	  (0, _createClass3.default)(DropDownMenu, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      if (this.props.autoWidth) {
	        this.setWidth();
	      }
	      if (this.props.openImmediately) {
	        // TODO: Temporary fix to make openImmediately work with popover.
	        /* eslint-disable react/no-did-mount-set-state */
	        setTimeout(function () {
	          return _this2.setState({
	            open: true,
	            anchorEl: _this2.rootNode
	          });
	        }, 0);
	        /* eslint-enable react/no-did-mount-set-state */
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      if (this.props.autoWidth) {
	        this.setWidth();
	      }
	    }
	  }, {
	    key: 'getInputNode',
	
	
	    /**
	     * This method is deprecated but still here because the TextField
	     * need it in order to work. TODO: That will be addressed later.
	     */
	    value: function getInputNode() {
	      var _this3 = this;
	
	      var rootNode = this.rootNode;
	
	      rootNode.focus = function () {
	        if (!_this3.props.disabled) {
	          _this3.setState({
	            open: !_this3.state.open,
	            anchorEl: _this3.rootNode
	          });
	        }
	      };
	
	      return rootNode;
	    }
	  }, {
	    key: 'setWidth',
	    value: function setWidth() {
	      var el = this.rootNode;
	      if (!this.props.style || !this.props.style.hasOwnProperty('width')) {
	        el.style.width = 'auto';
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var _props = this.props,
	          animated = _props.animated,
	          animation = _props.animation,
	          autoWidth = _props.autoWidth,
	          multiple = _props.multiple,
	          children = _props.children,
	          className = _props.className,
	          disabled = _props.disabled,
	          iconStyle = _props.iconStyle,
	          labelStyle = _props.labelStyle,
	          listStyle = _props.listStyle,
	          maxHeight = _props.maxHeight,
	          menuStyleProp = _props.menuStyle,
	          selectionRenderer = _props.selectionRenderer,
	          onClose = _props.onClose,
	          openImmediately = _props.openImmediately,
	          menuItemStyle = _props.menuItemStyle,
	          selectedMenuItemStyle = _props.selectedMenuItemStyle,
	          style = _props.style,
	          underlineStyle = _props.underlineStyle,
	          value = _props.value,
	          iconButton = _props.iconButton,
	          anchorOrigin = _props.anchorOrigin,
	          targetOrigin = _props.targetOrigin,
	          other = (0, _objectWithoutProperties3.default)(_props, ['animated', 'animation', 'autoWidth', 'multiple', 'children', 'className', 'disabled', 'iconStyle', 'labelStyle', 'listStyle', 'maxHeight', 'menuStyle', 'selectionRenderer', 'onClose', 'openImmediately', 'menuItemStyle', 'selectedMenuItemStyle', 'style', 'underlineStyle', 'value', 'iconButton', 'anchorOrigin', 'targetOrigin']);
	      var _state = this.state,
	          anchorEl = _state.anchorEl,
	          open = _state.open;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      var displayValue = '';
	      if (!multiple) {
	        _react2.default.Children.forEach(children, function (child) {
	          if (child && value === child.props.value) {
	            if (selectionRenderer) {
	              displayValue = selectionRenderer(value);
	            } else {
	              // This will need to be improved (in case primaryText is a node)
	              displayValue = child.props.label || child.props.primaryText;
	            }
	          }
	        });
	      } else {
	        var values = [];
	        _react2.default.Children.forEach(children, function (child) {
	          if (child && value && value.includes(child.props.value)) {
	            if (selectionRenderer) {
	              values.push(child.props.value);
	            } else {
	              values.push(child.props.label || child.props.primaryText);
	            }
	          }
	        });
	
	        displayValue = [];
	        if (selectionRenderer) {
	          displayValue = selectionRenderer(values);
	        } else {
	          displayValue = values.join(', ');
	        }
	      }
	
	      var menuStyle = void 0;
	      if (anchorEl && !autoWidth) {
	        menuStyle = (0, _simpleAssign2.default)({
	          width: anchorEl.clientWidth
	        }, menuStyleProp);
	      } else {
	        menuStyle = menuStyleProp;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, {
	          ref: function ref(node) {
	            _this4.rootNode = node;
	          },
	          className: className,
	          style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, open && styles.rootWhenOpen, style))
	        }),
	        _react2.default.createElement(
	          _ClearFix2.default,
	          { style: styles.control, onTouchTap: this.handleTouchTapControl },
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles((0, _simpleAssign2.default)({}, styles.label, open && styles.labelWhenOpen, labelStyle)) },
	            displayValue
	          ),
	          _react2.default.createElement(
	            _IconButton2.default,
	            {
	              disabled: disabled,
	              onKeyDown: this.handleKeyDown,
	              ref: function ref(node) {
	                _this4.arrowNode = node;
	              },
	              style: (0, _simpleAssign2.default)({}, styles.icon, iconStyle),
	              iconStyle: styles.iconChildren
	            },
	            iconButton
	          ),
	          _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, styles.underline, underlineStyle)) })
	        ),
	        _react2.default.createElement(
	          _Popover2.default,
	          {
	            anchorOrigin: anchorOrigin,
	            targetOrigin: targetOrigin,
	            anchorEl: anchorEl,
	            animation: animation || _PopoverAnimationVertical2.default,
	            open: open,
	            animated: animated,
	            onRequestClose: this.handleRequestCloseMenu
	          },
	          _react2.default.createElement(
	            _Menu2.default,
	            {
	              multiple: multiple,
	              maxHeight: maxHeight,
	              desktop: true,
	              value: value,
	              onEscKeyDown: this.handleEscKeyDownMenu,
	              style: menuStyle,
	              listStyle: listStyle,
	              onItemTouchTap: this.handleItemTouchTap,
	              onChange: this.handleChange,
	              menuItemStyle: menuItemStyle,
	              selectedMenuItemStyle: selectedMenuItemStyle,
	              autoWidth: autoWidth,
	              width: !autoWidth && menuStyle ? menuStyle.width : null
	            },
	            children
	          )
	        )
	      );
	    }
	  }]);
	  return DropDownMenu;
	}(_react.Component);
	
	DropDownMenu.muiName = 'DropDownMenu';
	DropDownMenu.defaultProps = {
	  animated: true,
	  autoWidth: true,
	  disabled: false,
	  iconButton: _react2.default.createElement(_arrowDropDown2.default, null),
	  openImmediately: false,
	  maxHeight: 500,
	  multiple: false,
	  anchorOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  }
	};
	DropDownMenu.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? DropDownMenu.propTypes = {
	  /**
	   * This is the point on the anchor that the popover's
	   * `targetOrigin` will attach to.
	   * Options:
	   * vertical: [top, center, bottom]
	   * horizontal: [left, middle, right].
	   */
	  anchorOrigin: _propTypes4.default.origin,
	  /**
	   * If true, the popover will apply transitions when
	   * it gets added to the DOM.
	   */
	  animated: _propTypes2.default.bool,
	  /**
	   * Override the default animation component used.
	   */
	  animation: _propTypes2.default.func,
	  /**
	   * The width will automatically be set according to the items inside the menu.
	   * To control this width in css instead, set this prop to `false`.
	   */
	  autoWidth: _propTypes2.default.bool,
	  /**
	   * The `MenuItem`s to populate the `Menu` with. If the `MenuItems` have the
	   * prop `label` that value will be used to render the representation of that
	   * item within the field.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * Disables the menu.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * Overrides default `SvgIcon` dropdown arrow component.
	   */
	  iconButton: _propTypes2.default.node,
	  /**
	   * Overrides the styles of icon element.
	   */
	  iconStyle: _propTypes2.default.object,
	  /**
	   * Overrides the styles of label when the `DropDownMenu` is inactive.
	   */
	  labelStyle: _propTypes2.default.object,
	  /**
	   * The style object to use to override underlying list style.
	   */
	  listStyle: _propTypes2.default.object,
	  /**
	   * The maximum height of the `Menu` when it is displayed.
	   */
	  maxHeight: _propTypes2.default.number,
	  /**
	   * Override the inline-styles of menu items.
	   */
	  menuItemStyle: _propTypes2.default.object,
	  /**
	   * Overrides the styles of `Menu` when the `DropDownMenu` is displayed.
	   */
	  menuStyle: _propTypes2.default.object,
	  /**
	   * If true, `value` must be an array and the menu will support
	   * multiple selections.
	   */
	  multiple: _propTypes2.default.bool,
	  /**
	   * Callback function fired when a menu item is clicked, other than the one currently selected.
	   *
	   * @param {object} event TouchTap event targeting the menu item that was clicked.
	   * @param {number} key The index of the clicked menu item in the `children` collection.
	   * @param {any} value If `multiple` is true, the menu's `value`
	   * array with either the menu item's `value` added (if
	   * it wasn't already selected) or omitted (if it was already selected).
	   * Otherwise, the `value` of the menu item.
	   */
	  onChange: _propTypes2.default.func,
	  /**
	   * Callback function fired when the menu is closed.
	   */
	  onClose: _propTypes2.default.func,
	  /**
	   * Set to true to have the `DropDownMenu` automatically open on mount.
	   */
	  openImmediately: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of selected menu items.
	   */
	  selectedMenuItemStyle: _propTypes2.default.object,
	  /**
	   * Callback function fired when a menu item is clicked, other than the one currently selected.
	   *
	   * @param {any} value If `multiple` is true, the menu's `value`
	   * array with either the menu item's `value` added (if
	   * it wasn't already selected) or omitted (if it was already selected).
	   * Otherwise, the `value` of the menu item.
	   */
	  selectionRenderer: _propTypes2.default.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * This is the point on the popover which will attach to
	   * the anchor's origin.
	   * Options:
	   * vertical: [top, center, bottom]
	   * horizontal: [left, middle, right].
	   */
	  targetOrigin: _propTypes4.default.origin,
	  /**
	   * Overrides the inline-styles of the underline.
	   */
	  underlineStyle: _propTypes2.default.object,
	  /**
	   * If `multiple` is true, an array of the `value`s of the selected
	   * menu items. Otherwise, the `value` of the selected menu item.
	   * If provided, the menu will be a controlled component.
	   */
	  value: _propTypes2.default.any
	} : void 0;
	exports.default = DropDownMenu;

/***/ }),
/* 682 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(559);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(568);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationArrowDropDown = function NavigationArrowDropDown(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' })
	  );
	};
	NavigationArrowDropDown = (0, _pure2.default)(NavigationArrowDropDown);
	NavigationArrowDropDown.displayName = 'NavigationArrowDropDown';
	NavigationArrowDropDown.muiName = 'SvgIcon';
	
	exports.default = NavigationArrowDropDown;

/***/ }),
/* 683 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _BeforeAfterWrapper = __webpack_require__(684);
	
	var _BeforeAfterWrapper2 = _interopRequireDefault(_BeforeAfterWrapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	  before: {
	    content: "' '",
	    display: 'table'
	  },
	  after: {
	    content: "' '",
	    clear: 'both',
	    display: 'table'
	  }
	};
	
	var ClearFix = function ClearFix(_ref) {
	  var style = _ref.style,
	      children = _ref.children,
	      other = (0, _objectWithoutProperties3.default)(_ref, ['style', 'children']);
	  return _react2.default.createElement(
	    _BeforeAfterWrapper2.default,
	    (0, _extends3.default)({}, other, {
	      beforeStyle: styles.before,
	      afterStyle: styles.after,
	      style: style
	    }),
	    children
	  );
	};
	
	ClearFix.muiName = 'ClearFix';
	
	 true ? ClearFix.propTypes = {
	  children: _propTypes2.default.node,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	
	exports.default = ClearFix;

/***/ }),
/* 684 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 *  BeforeAfterWrapper
	 *    An alternative for the ::before and ::after css pseudo-elements for
	 *    components whose styles are defined in javascript instead of css.
	 *
	 *  Usage: For the element that we want to apply before and after elements to,
	 *    wrap its children with BeforeAfterWrapper. For example:
	 *
	 *                                            <Paper>
	 *  <Paper>                                     <div> // See notice
	 *    <BeforeAfterWrapper>        renders         <div/> // before element
	 *      [children of paper]       ------>         [children of paper]
	 *    </BeforeAfterWrapper>                       <div/> // after element
	 *  </Paper>                                    </div>
	 *                                            </Paper>
	 *
	 *  Notice: Notice that this div bundles together our elements. If the element
	 *    that we want to apply before and after elements is a HTML tag (i.e. a
	 *    div, p, or button tag), we can avoid this extra nesting by passing using
	 *    the BeforeAfterWrapper in place of said tag like so:
	 *
	 *  <p>
	 *    <BeforeAfterWrapper>   do this instead   <BeforeAfterWrapper elementType='p'>
	 *      [children of p]          ------>         [children of p]
	 *    </BeforeAfterWrapper>                    </BeforeAfterWrapper>
	 *  </p>
	 *
	 *  BeforeAfterWrapper features spread functionality. This means that we can
	 *  pass HTML tag properties directly into the BeforeAfterWrapper tag.
	 *
	 *  When using BeforeAfterWrapper, ensure that the parent of the beforeElement
	 *  and afterElement have a defined style position.
	 */
	
	var styles = {
	  box: {
	    boxSizing: 'border-box'
	  }
	};
	
	var BeforeAfterWrapper = function (_Component) {
	  (0, _inherits3.default)(BeforeAfterWrapper, _Component);
	
	  function BeforeAfterWrapper() {
	    (0, _classCallCheck3.default)(this, BeforeAfterWrapper);
	    return (0, _possibleConstructorReturn3.default)(this, (BeforeAfterWrapper.__proto__ || (0, _getPrototypeOf2.default)(BeforeAfterWrapper)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(BeforeAfterWrapper, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          beforeStyle = _props.beforeStyle,
	          afterStyle = _props.afterStyle,
	          beforeElementType = _props.beforeElementType,
	          afterElementType = _props.afterElementType,
	          elementType = _props.elementType,
	          other = (0, _objectWithoutProperties3.default)(_props, ['beforeStyle', 'afterStyle', 'beforeElementType', 'afterElementType', 'elementType']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var beforeElement = void 0;
	      var afterElement = void 0;
	
	      if (beforeStyle) {
	        beforeElement = _react2.default.createElement(this.props.beforeElementType, {
	          style: prepareStyles((0, _simpleAssign2.default)({}, styles.box, beforeStyle)),
	          key: '::before'
	        });
	      }
	
	      if (afterStyle) {
	        afterElement = _react2.default.createElement(this.props.afterElementType, {
	          style: prepareStyles((0, _simpleAssign2.default)({}, styles.box, afterStyle)),
	          key: '::after'
	        });
	      }
	
	      var children = [beforeElement, this.props.children, afterElement];
	
	      var props = other;
	      props.style = prepareStyles((0, _simpleAssign2.default)({}, this.props.style));
	
	      return _react2.default.createElement(this.props.elementType, props, children);
	    }
	  }]);
	  return BeforeAfterWrapper;
	}(_react.Component);
	
	BeforeAfterWrapper.defaultProps = {
	  beforeElementType: 'div',
	  afterElementType: 'div',
	  elementType: 'div'
	};
	BeforeAfterWrapper.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? BeforeAfterWrapper.propTypes = {
	  afterElementType: _propTypes2.default.string,
	  afterStyle: _propTypes2.default.object,
	  beforeElementType: _propTypes2.default.string,
	  beforeStyle: _propTypes2.default.object,
	  children: _propTypes2.default.node,
	  elementType: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = BeforeAfterWrapper;

/***/ }),
/* 685 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Paper = __webpack_require__(501);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _propTypes3 = __webpack_require__(503);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var targetOrigin = props.targetOrigin;
	  var open = state.open;
	  var muiTheme = context.muiTheme;
	
	  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');
	
	  return {
	    root: {
	      position: 'fixed',
	      zIndex: muiTheme.zIndex.popover,
	      opacity: open ? 1 : 0,
	      transform: open ? 'scaleY(1)' : 'scaleY(0)',
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('450ms', ['transform', 'opacity']),
	      maxHeight: '100%'
	    }
	  };
	}
	
	var PopoverAnimationVertical = function (_Component) {
	  (0, _inherits3.default)(PopoverAnimationVertical, _Component);
	
	  function PopoverAnimationVertical() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, PopoverAnimationVertical);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PopoverAnimationVertical.__proto__ || (0, _getPrototypeOf2.default)(PopoverAnimationVertical)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(PopoverAnimationVertical, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        open: nextProps.open
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          zDepth = _props.zDepth;
	
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: zDepth,
	          className: className
	        },
	        this.props.children
	      );
	    }
	  }]);
	  return PopoverAnimationVertical;
	}(_react.Component);
	
	PopoverAnimationVertical.defaultProps = {
	  style: {},
	  zDepth: 1
	};
	PopoverAnimationVertical.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? PopoverAnimationVertical.propTypes = {
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  open: _propTypes2.default.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  targetOrigin: _propTypes4.default.origin.isRequired,
	  zDepth: _propTypes4.default.zDepth
	} : void 0;
	exports.default = PopoverAnimationVertical;

/***/ }),
/* 686 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _UserRoleListItem = __webpack_require__(687);
	
	var _UserRoleListItem2 = _interopRequireDefault(_UserRoleListItem);
	
	__webpack_require__(694);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UserRolesList = function (_Component) {
	  (0, _inherits3.default)(UserRolesList, _Component);
	
	  function UserRolesList(props) {
	    (0, _classCallCheck3.default)(this, UserRolesList);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (UserRolesList.__proto__ || (0, _getPrototypeOf2.default)(UserRolesList)).call(this, props));
	
	    _this.isSelected = function (id) {
	      var selected = _this.state.selected.indexOf(id) !== -1;
	      return selected;
	    };
	
	    _this.onItemSelect = function (id) {
	      return function (evt, selected) {
	        var selectedIds = [].concat(_this.props.selected);
	        if (selected) {
	          selectedIds.push(id);
	        } else {
	          selectedIds.splice(selectedIds.indexOf(id), 1);
	        }
	
	        _this.props.selectRoles(selectedIds);
	      };
	    };
	
	    _this.state = {
	      selected: _this.props.selected.map(function (role) {
	        return role.id;
	      })
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(UserRolesList, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var props = this.props,
	          onItemSelect = this.onItemSelect;
	
	      return _react2.default.createElement(
	        'table',
	        { className: 'roles-list' },
	        _react2.default.createElement(
	          'tbody',
	          null,
	          props.roles.map(function (role, i) {
	            var id = role.id;
	
	            var selected = _this2.isSelected(id);
	            return _react2.default.createElement(_UserRoleListItem2.default, (0, _extends3.default)({
	              key: 'role-list-item-' + id
	            }, role, {
	              selected: selected,
	              onSelect: onItemSelect(id) }));
	          })
	        )
	      );
	    }
	  }]);
	  return UserRolesList;
	}(_react.Component);
	
	UserRolesList.defaultProps = {
	  roles: [],
	  selected: []
	};
	
	UserRolesList.propTypes = {
	  roles: _propTypes2.default.array.isRequired,
	  selected: _propTypes2.default.array.isRequired,
	  selectRoles: _propTypes2.default.func.isRequired
	};
	
	exports.default = UserRolesList;

/***/ }),
/* 687 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Checkbox = __webpack_require__(688);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	__webpack_require__(692);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RoleItem = function RoleItem(props) {
	  var name = props.name,
	      id = props.id,
	      description = props.description;
	
	
	  return _react2.default.createElement(
	    'tr',
	    null,
	    _react2.default.createElement(
	      'td',
	      null,
	      _react2.default.createElement(_Checkbox2.default, {
	        checked: props.selected,
	        onCheck: props.onSelect,
	        label: name
	      })
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      _react2.default.createElement(
	        'span',
	        { className: 'role-item-description' },
	        description
	      )
	    )
	  );
	};
	
	exports.default = RoleItem;

/***/ }),
/* 688 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Checkbox = __webpack_require__(689);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Checkbox2.default;

/***/ }),
/* 689 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(287);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(499);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(311);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(316);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(317);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(321);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(355);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(500);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(231);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _EnhancedSwitch = __webpack_require__(535);
	
	var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);
	
	var _transitions = __webpack_require__(504);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _checkBoxOutlineBlank = __webpack_require__(690);
	
	var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);
	
	var _checkBox = __webpack_require__(691);
	
	var _checkBox2 = _interopRequireDefault(_checkBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var checkbox = context.muiTheme.checkbox;
	
	  var checkboxSize = 24;
	
	  return {
	    icon: {
	      height: checkboxSize,
	      width: checkboxSize
	    },
	    check: {
	      position: 'absolute',
	      opacity: 0,
	      transform: 'scale(0)',
	      transitionOrigin: '50% 50%',
	      transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('0ms', 'transform', '450ms'),
	      fill: checkbox.checkedColor
	    },
	    checkWhenSwitched: {
	      opacity: 1,
	      transform: 'scale(1)',
	      transition: _transitions2.default.easeOut('0ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('800ms', 'transform', '0ms')
	    },
	    checkWhenDisabled: {
	      fill: checkbox.disabledColor
	    },
	    box: {
	      position: 'absolute',
	      opacity: 1,
	      fill: checkbox.boxColor,
	      transition: _transitions2.default.easeOut('1000ms', 'opacity', '200ms')
	    },
	    boxWhenSwitched: {
	      opacity: 0,
	      transition: _transitions2.default.easeOut('650ms', 'opacity', '150ms'),
	      fill: checkbox.checkedColor
	    },
	    boxWhenDisabled: {
	      fill: props.checked ? 'transparent' : checkbox.disabledColor
	    },
	    label: {
	      color: props.disabled ? checkbox.labelDisabledColor : checkbox.labelColor
	    }
	  };
	}
	
	var Checkbox = function (_Component) {
	  (0, _inherits3.default)(Checkbox, _Component);
	
	  function Checkbox() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Checkbox);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      switched: false
	    }, _this.handleStateChange = function (newSwitched) {
	      _this.setState({
	        switched: newSwitched
	      });
	    }, _this.handleCheck = function (event, isInputChecked) {
	      if (_this.props.onCheck) {
	        _this.props.onCheck(event, isInputChecked);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(Checkbox, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          checked = _props.checked,
	          defaultChecked = _props.defaultChecked,
	          valueLink = _props.valueLink;
	
	
	      if (checked || defaultChecked || valueLink && valueLink.value) {
	        this.setState({
	          switched: true
	        });
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.checked !== nextProps.checked) {
	        this.setState({
	          switched: nextProps.checked
	        });
	      }
	    }
	  }, {
	    key: 'isChecked',
	    value: function isChecked() {
	      return this.refs.enhancedSwitch.isSwitched();
	    }
	  }, {
	    key: 'setChecked',
	    value: function setChecked(newCheckedValue) {
	      this.refs.enhancedSwitch.setSwitched(newCheckedValue);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          iconStyle = _props2.iconStyle,
	          onCheck = _props2.onCheck,
	          checkedIcon = _props2.checkedIcon,
	          uncheckedIcon = _props2.uncheckedIcon,
	          other = (0, _objectWithoutProperties3.default)(_props2, ['iconStyle', 'onCheck', 'checkedIcon', 'uncheckedIcon']);
	
	      var styles = getStyles(this.props, this.context);
	      var boxStyles = (0, _simpleAssign2.default)(styles.box, this.state.switched && styles.boxWhenSwitched, iconStyle, this.props.disabled && styles.boxWhenDisabled);
	      var checkStyles = (0, _simpleAssign2.default)(styles.check, this.state.switched && styles.checkWhenSwitched, iconStyle, this.props.disabled && styles.checkWhenDisabled);
	
	      var checkedElement = checkedIcon ? _react2.default.cloneElement(checkedIcon, {
	        style: (0, _simpleAssign2.default)(checkStyles, checkedIcon.props.style)
	      }) : _react2.default.createElement(_checkBox2.default, {
	        style: checkStyles
	      });
	
	      var unCheckedElement = uncheckedIcon ? _react2.default.cloneElement(uncheckedIcon, {
	        style: (0, _simpleAssign2.default)(boxStyles, uncheckedIcon.props.style)
	      }) : _react2.default.createElement(_checkBoxOutlineBlank2.default, {
	        style: boxStyles
	      });
	
	      var checkboxElement = _react2.default.createElement(
	        'div',
	        null,
	        unCheckedElement,
	        checkedElement
	      );
	
	      var rippleColor = this.state.switched ? checkStyles.fill : boxStyles.fill;
	      var mergedIconStyle = (0, _simpleAssign2.default)(styles.icon, iconStyle);
	
	      var labelStyle = (0, _simpleAssign2.default)(styles.label, this.props.labelStyle);
	
	      var enhancedSwitchProps = {
	        ref: 'enhancedSwitch',
	        inputType: 'checkbox',
	        switched: this.state.switched,
	        switchElement: checkboxElement,
	        rippleColor: rippleColor,
	        iconStyle: mergedIconStyle,
	        onSwitch: this.handleCheck,
	        labelStyle: labelStyle,
	        onParentShouldUpdate: this.handleStateChange,
	        labelPosition: this.props.labelPosition
	      };
	
	      return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, enhancedSwitchProps));
	    }
	  }]);
	  return Checkbox;
	}(_react.Component);
	
	Checkbox.defaultProps = {
	  labelPosition: 'right',
	  disabled: false
	};
	Checkbox.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? Checkbox.propTypes = {
	  /**
	   * Checkbox is checked if true.
	   */
	  checked: _propTypes2.default.bool,
	  /**
	   * The SvgIcon to use for the checked state.
	   * This is useful to create icon toggles.
	   */
	  checkedIcon: _propTypes2.default.element,
	  /**
	   * The default state of our checkbox component.
	   * **Warning:** This cannot be used in conjunction with `checked`.
	   * Decide between using a controlled or uncontrolled input element and remove one of these props.
	   * More info: https://fb.me/react-controlled-components
	   */
	  defaultChecked: _propTypes2.default.bool,
	  /**
	   * Disabled if true.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * Overrides the inline-styles of the icon element.
	   */
	  iconStyle: _propTypes2.default.object,
	  /**
	   * Overrides the inline-styles of the input element.
	   */
	  inputStyle: _propTypes2.default.object,
	  /**
	   * Where the label will be placed next to the checkbox.
	   */
	  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
	  /**
	   * Overrides the inline-styles of the Checkbox element label.
	   */
	  labelStyle: _propTypes2.default.object,
	  /**
	   * Callback function that is fired when the checkbox is checked.
	   *
	   * @param {object} event `change` event targeting the underlying checkbox `input`.
	   * @param {boolean} isInputChecked The `checked` value of the underlying checkbox `input`.
	   */
	  onCheck: _propTypes2.default.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * The SvgIcon to use for the unchecked state.
	   * This is useful to create icon toggles.
	   */
	  uncheckedIcon: _propTypes2.default.element,
	  /**
	   * ValueLink for when using controlled checkbox.
	   */
	  valueLink: _propTypes2.default.object
	} : void 0;
	exports.default = Checkbox;

/***/ }),
/* 690 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(559);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(568);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ToggleCheckBoxOutlineBlank = function ToggleCheckBoxOutlineBlank(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' })
	  );
	};
	ToggleCheckBoxOutlineBlank = (0, _pure2.default)(ToggleCheckBoxOutlineBlank);
	ToggleCheckBoxOutlineBlank.displayName = 'ToggleCheckBoxOutlineBlank';
	ToggleCheckBoxOutlineBlank.muiName = 'SvgIcon';
	
	exports.default = ToggleCheckBoxOutlineBlank;

/***/ }),
/* 691 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(559);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(568);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ToggleCheckBox = function ToggleCheckBox(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
	  );
	};
	ToggleCheckBox = (0, _pure2.default)(ToggleCheckBox);
	ToggleCheckBox.displayName = 'ToggleCheckBox';
	ToggleCheckBox.muiName = 'SvgIcon';
	
	exports.default = ToggleCheckBox;

/***/ }),
/* 692 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(693);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(468)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(693, function() {
				var newContent = __webpack_require__(693);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 693 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(467)();
	// imports
	
	
	// module
	exports.push([module.id, ".role-item-description{font-size:.7rem}", "", {"version":3,"sources":["/Users/kruegerm/dev/projects/outage-prediction/user-admin-ui/src/routes/RegisteredUsers/components/src/routes/RegisteredUsers/components/UserRoleListItem.scss"],"names":[],"mappings":"AAAA,uBACE,eACF,CAAE","file":"UserRoleListItem.scss","sourcesContent":[".role-item-description {\n  font-size: .7rem\n}"],"sourceRoot":""}]);
	
	// exports


/***/ }),
/* 694 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(695);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(468)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(695, function() {
				var newContent = __webpack_require__(695);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 695 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(467)();
	// imports
	
	
	// module
	exports.push([module.id, ".roles-list{list-style:none;margin:0;padding:0}", "", {"version":3,"sources":["/Users/kruegerm/dev/projects/outage-prediction/user-admin-ui/src/routes/RegisteredUsers/components/src/routes/RegisteredUsers/components/UserRolesList.scss"],"names":[],"mappings":"AAAA,YACE,gBAAgB,SACP,SACC,CACX","file":"UserRolesList.scss","sourcesContent":[".roles-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}"],"sourceRoot":""}]);
	
	// exports


/***/ })
]));
//# sourceMappingURL=1.users.82360f0494b5a8a07a8c.js.map