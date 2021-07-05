"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);

    _defineProperty(this, "list", void 0);

    _defineProperty(this, "statList", void 0);

    this.list = document.querySelector('#list_app');
    this.statList = document.querySelector('#list_stat-app');
  }

  _createClass(View, [{
    key: "render",
    value: function render(data, archivedParam, statFunc, cathegoriesLinks) {
      var _this = this;

      this.list.innerHTML = data.filter(function (e) {
        return e.archived === archivedParam;
      }).map(function (el) {
        return "\n            <tr class=\"todo__task\">\n                <th scope=\"row\">\n                    <div class=\"todo__icon\">\n                        <img class=\"icon--vertical-middle todo__icon--header\" src=\"".concat('/img' + _this.returnCathegoryImg(el.cathegory, cathegoriesLinks), "\" alt=\"cathegory\">\n                    </div>\n                </th>\n                <td>").concat(el.taskName, "</td> \n                <td>").concat(el.createdTitle, "</td>\n                <td>").concat(el.cathegory, "</td>\n                <td class=\"todo__content-conteiner\">\n                    <div class=\"truncate-text todo__content todo__content--small\">\n                        ").concat(el.content, "\n                    </div>\n                </td>\n                <td>").concat(_this.returnDates(el.content), "</td>\n                <td>\n                    <div class=\"todo__icon todo__icon--update\">\n                        <img class=\"icon--vertical-middle todo__icon--header\" src=\"./img/pencil.svg\" alt=\"change task\" data-id=").concat(el.id, ">\n                    </div>\n                </td>\n                <td>\n                    <div class=\"todo__icon todo__icon--delete\">\n                        <img class=\"icon--vertical-middle todo__icon--header\" src=\"./img/delete.svg\" alt=\"delete task\"  data-id=").concat(el.id, ">\n                    </div>\n                </td>\n                <td>\n                    ").concat(!archivedParam ? "<div class=\"todo__icon todo__icon--archived\">\n                                <img class=\"icon--vertical-middle todo__icon--header\" src=\"./img/download-button.svg\" alt=\"archive task\" data-id=".concat(el.id, ">\n                            </div>") : "<div class=\"todo__icon todo__icon--archived\">\n                                <img class=\"icon--vertical-middle todo__icon--header\" src=\"./img/reply.svg\" alt=\"return to active task\" data-id=".concat(el.id, ">\n                            </div>"), "\n                </td>\n            </tr>");
      }).join('');
      var stat = statFunc();
      this.statList.innerHTML = stat.map(function (el) {
        var key = Object.keys(el)[0];
        return "\n            <tr>\n                <th scope=\"row\">\n                    <div class=\"todo__icon\">\n                        <img class=\"icon--vertical-middle todo__icon--header\" src=\"./img".concat(el[key].img, "\" alt=\"").concat(key + 'cathegory', "\"  >\n                    </div>\n                </th>\n                <td>").concat(key, "</td>\n                <td>").concat(el[key].active, "</td>\n                <td>").concat(el[key].archived, "</td>\n            </tr>");
      }).join('');
    }
  }, {
    key: "returnDates",
    value: function returnDates(cont) {
      var regExp = [/((0|1)[0-9]([.\-/])[0-3][0-9]([.\-/])(19|20)[0-9]{2})/g, /([0-3][0-9]([.\-/])(0|1)[0-9]([.\-/])(19|20)[0-9]{2})/g, /([0-9]([.\-/])[0-3][0-9]([.\-/])(19|20)[0-9]{2})/g, /([0-3][0-9]([.\-/])[0-9]([.\-/])(19|20)[0-9]{2})/g, /([0-9]([.\-/])[0-9]([.\-/])(19|20)[0-9]{2})/g];
      var wrongExp = [/([0-9][0-9]([.\-/])[3-9][2-9]([.\-/])(19|20)[0-9]{2})/g, /([3-9][2-9]([.\-/])[0-9][0-9]([.\-/])(19|20)[0-9]{2})/g, /([1-9][3-9]([.\-/])[1-9][3-9]([.\-/])(19|20)[0-9]{2})/g, /([2-9][0-9]([.\-/])[2-9][0-9]([.\-/])(19|20)[0-9]{2})/g, /([0][0]([.\-/])[0-9][0-9]([.\-/])(19|20)[0-9]{2})/g, /([0-9][0-9]([.\-/])[0][0]([.\-/])(19|20)[0-9]{2})/g];
      wrongExp.forEach(function (el) {
        if (cont.match(el) !== null) {
          cont.match(el).forEach(function (el) {
            return cont = cont.replace(el, '');
          });
        }
      });
      var arr = [];
      regExp.forEach(function (el) {
        if (cont.match(el) !== null) {
          cont.match(el).forEach(function (el) {
            cont = cont.replace(el, '');
            arr.push(el);
          });
        }
      });
      var arrMatches = Array.from(new Set(arr));
      return arrMatches.length > 0 ? arrMatches.map(function (el) {
        return "<div>".concat(el, "</div>");
      }).join('') : '-';
    }
  }, {
    key: "returnCathegoryImg",
    value: function returnCathegoryImg(cathegory, cathegoriesLinks) {
      var img = cathegoriesLinks["default"];
      Object.keys(cathegoriesLinks).forEach(function (e) {
        return e == cathegory ? img = cathegoriesLinks[e] : null;
      });
      return img;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(closeTaskPopup, archivedStatusChange, openCreateTaskPopup) {
      var taskClose = document.querySelector('#task_close');
      taskClose.addEventListener('click', closeTaskPopup);
      var archivedStatus = document.querySelector('#archived_status');
      var activeStatus = document.querySelector('#active_status');

      var archivedFn = function archivedFn(e) {
        archivedStatusChange(e);
        archivedStatus.parentElement.classList.add('active');
        activeStatus.parentElement.classList.remove('active');
      };

      archivedStatus.addEventListener('change', archivedFn);

      var activeFn = function activeFn(e) {
        archivedStatusChange(e);
        activeStatus.parentElement.classList.add('active');
        archivedStatus.parentElement.classList.remove('active');
      };

      activeStatus.addEventListener('change', activeFn);
      var openCreateTaskBtn = document.querySelector('#new_task');
      openCreateTaskBtn.addEventListener('click', openCreateTaskPopup);
    }
  }, {
    key: "addEventListenerForNewTaskSave",
    value: function addEventListenerForNewTaskSave(addTask, inputs) {
      var taskBtnSave = document.querySelector("#".concat(inputs.taskSaveId));

      var eventFunction = function eventFunction() {
        addTask();
        taskBtnSave.removeEventListener('click', eventFunction);
      };

      taskBtnSave ? taskBtnSave.addEventListener('click', eventFunction) : null;
    }
  }, {
    key: "addEventListenerForUpdateTask",
    value: function addEventListenerForUpdateTask(updateTask, inputs) {
      var taskBtnUpd = document.querySelector("#".concat(inputs.taskUpdateId));

      var eventFunction = function eventFunction() {
        updateTask();
        taskBtnUpd.removeEventListener('click', eventFunction);
      };

      taskBtnUpd ? taskBtnUpd.addEventListener('click', eventFunction) : null;
    }
  }, {
    key: "addDynamicEventListener",
    value: function addDynamicEventListener(deleteTask, changeArchivedStatusOfTask, openTaskPopupUpd) {
      var deleteBtn = document.querySelectorAll('.todo__icon--delete');
      deleteBtn.forEach(function (e) {
        return e.children[0].addEventListener('click', deleteTask);
      });
      var archiveBtn = document.querySelectorAll('.todo__icon--archived');
      archiveBtn.forEach(function (e) {
        return e.children[0].addEventListener('click', changeArchivedStatusOfTask);
      });
      var updateBtn = document.querySelectorAll('.todo__icon--update');
      updateBtn.forEach(function (e) {
        return e.children[0].addEventListener('click', openTaskPopupUpd);
      });
      var tasks = document.querySelectorAll('.todo__task');
      tasks.forEach(function (el) {
        return el.addEventListener("click", function () {
          _toConsumableArray(el.children).forEach(function (ch) {
            if (ch.classList.contains('todo__content-conteiner')) {
              ch.children[0].classList.contains('truncate-text') ? ch.children[0].classList.remove('truncate-text') : ch.children[0].classList.add('truncate-text');
            }
          });
        });
      });
    }
  }, {
    key: "closeTaskPopup",
    value: function closeTaskPopup(inputs) {
      document.querySelector('html').style.overflow = 'auto';
      document.querySelector('.main').classList.remove('popup-active');
      document.querySelector('.main__popup').classList.remove('main__popup--active');
      inputs.taskName.value = '';
      inputs.taskCathegory.value = inputs.taskCathegory.options[0].value;
      inputs.taskContent.value = '';
      inputs.taskName.placeholder = 'Name of task';
    }
  }, {
    key: "openTaskPopup",
    value: function openTaskPopup(inputs) {
      document.querySelector('html').style.overflow = 'hidden';
      document.querySelector('.main').classList.add('popup-active');
      document.querySelector('.main__popup').classList.add('main__popup--active');
      var btn = document.querySelector('.todo__icon--confirm-changes').children[0];
      btn.id = inputs.taskSaveId;
    }
  }, {
    key: "openTaskPopupUpd",
    value: function openTaskPopupUpd(inputs, data, event) {
      document.querySelector('html').style.overflow = 'hidden';
      document.querySelector('.main').classList.add('popup-active');
      document.querySelector('.main__popup').classList.add('main__popup--active');
      var currentEl = data.find(function (el) {
        return el.id == event.target.dataset.id;
      });
      inputs.taskName.value = currentEl.taskName;
      var currentCathegoryIndex = 0;

      _toConsumableArray(inputs.taskCathegory.options).forEach(function (el, index) {
        el.value === currentEl.cathegory ? currentCathegoryIndex = index : null;
      });

      inputs.taskCathegory.value = inputs.taskCathegory.options[currentCathegoryIndex].value;
      inputs.taskContent.value = currentEl.content;
      var btn = document.querySelector('.todo__icon--confirm-changes').children[0];
      btn.id = inputs.taskUpdateId;
    }
  }]);

  return View;
}();

exports["default"] = View;