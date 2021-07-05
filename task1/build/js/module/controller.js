"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _model = _interopRequireDefault(require("./model.js"));

var _view = _interopRequireDefault(require("./view.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Controller = function Controller() {
  var _this = this;

  _classCallCheck(this, Controller);

  _defineProperty(this, "editedTaskTarget", void 0);

  _defineProperty(this, "reRender", function () {
    _this.view.render(_this.model.data, _this.model.isArchived, _this.calcStat, _this.model.cathegories);

    _this.view.addDynamicEventListener(_this.deleteTask, _this.changeArchivedStatusOfTask, _this.openTaskPopupUpd);
  });

  _defineProperty(this, "addTask", function () {
    var result = _this.model.addTask(_this.model.data, _this.model.inputs, _this.callbackForClosePopup);

    !result ? _this.view.addEventListenerForNewTaskSave(_this.addTask, _this.model.inputs) : null;

    _this.reRender();
  });

  _defineProperty(this, "deleteTask", function (e) {
    _this.model.deleteTask(_this.model.data, e);

    _this.reRender();
  });

  _defineProperty(this, "updateTask", function () {
    var result = _this.model.updateTask(_this.model.data, _this.model.inputs, _this.callbackForClosePopup, _this.editedTaskTarget);

    !result ? _this.view.addEventListenerForUpdateTask(_this.updateTask, _this.model.inputs) : null;

    _this.reRender();
  });

  _defineProperty(this, "changeArchivedStatusOfTask", function (e) {
    _this.model.changeArchivedStatusOfTask(_this.model.data, e);

    _this.reRender();
  });

  _defineProperty(this, "callbackForClosePopup", function () {
    _this.view.closeTaskPopup(_this.model.inputs);
  });

  _defineProperty(this, "openTaskPopup", function () {
    _this.view.openTaskPopup(_this.model.inputs);

    _this.view.addEventListenerForNewTaskSave(_this.addTask, _this.model.inputs);
  });

  _defineProperty(this, "openTaskPopupUpd", function (e) {
    _this.editedTaskTarget = e;

    _this.view.openTaskPopupUpd(_this.model.inputs, _this.model.data, e);

    _this.view.addEventListenerForUpdateTask(_this.updateTask, _this.model.inputs);
  });

  _defineProperty(this, "archivedStatusChange", function (e) {
    _this.model.changeArchivedStatus(_this.model.setIsArchived, e);

    _this.reRender();
  });

  _defineProperty(this, "calcStat", function () {
    return _this.model.calcStat(_this.model.data, _this.model.cathegories);
  });

  this.model = new _model["default"]();
  this.view = new _view["default"]();
  this.view.render(this.model.data, this.model.isArchived, this.calcStat, this.model.cathegories);
  this.view.addEventListener(this.callbackForClosePopup, this.archivedStatusChange, this.openTaskPopup);
  this.view.addDynamicEventListener(this.deleteTask, this.changeArchivedStatusOfTask, this.openTaskPopupUpd);
};

exports["default"] = Controller;