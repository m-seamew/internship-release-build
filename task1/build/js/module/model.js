"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Model = /*#__PURE__*/function () {
  function Model() {
    var _this = this;

    _classCallCheck(this, Model);

    _defineProperty(this, "data", void 0);

    _defineProperty(this, "monthes", void 0);

    _defineProperty(this, "cathegories", void 0);

    _defineProperty(this, "inputs", void 0);

    _defineProperty(this, "isArchived", void 0);

    _defineProperty(this, "setIsArchived", function (val) {
      return _this.isArchived = val;
    });

    this.inputs = {
      taskName: document.querySelector('#task_name'),
      taskCathegory: document.querySelector('#task_cathegory'),
      taskContent: document.querySelector('#task_content'),
      taskSaveId: 'task_save',
      taskUpdateId: 'task_update'
    };
    this.isArchived = false;
    this.cathegories = {
      'Task': '/cathegories/task.svg',
      'Random Thought': '/cathegories/thinking.svg',
      'Idea': '/cathegories/lamp.svg',
      'default': '/cathegories/task.svg'
    };
    this.data = [{
      id: 1,
      taskName: "Shoping list",
      created: "Sun Jul 04 2021 20:38:54 GMT+0200 (Восточная Европа, стандартное время)",
      createdTitle: "Jul 4, 2021",
      cathegory: "Task",
      content: "Tomatoes, bread",
      archived: false
    }, {
      id: 2,
      taskName: "The theory of evolution",
      created: "Sun Jul 04 2021 20:39:45 GMT+0200 (Восточная Европа, стандартное время)",
      createdTitle: "Jul 4, 2021",
      cathegory: "Random Thought",
      content: "The evolution...",
      archived: false
    }, {
      id: 3,
      taskName: "New feature",
      created: "Sun Jul 04 2021 20:41:17 GMT+0200 (Восточная Европа, стандартное время)",
      createdTitle: "Jul 4, 2021",
      cathegory: "Idea",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet porttitor metus, et aliquet arcu faucibus vitae. Maecenas vitae nisi ut leo vulputate convallis. Vivamus metus purus, semper sed neque eu, fringilla pulvinar turpis. ",
      archived: true
    }, {
      id: 4,
      taskName: "Visit the doctor",
      created: "Sun Jul 04 2021 20:42:56 GMT+0200 (Восточная Европа, стандартное время)",
      createdTitle: "Jul 4, 2021",
      cathegory: "Task",
      content: "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
      archived: false
    }, {
      id: 5,
      taskName: "StartUp idea presentation",
      created: "Sun Jul 04 2021 20:44:51 GMT+0200 (Восточная Европа, стандартное время)",
      createdTitle: "Jul 4, 2021",
      cathegory: "Idea",
      content: "deadline for application - 4.08.2021",
      archived: false
    }, {
      id: 6,
      taskName: "Go to the cinema",
      created: "Sun Jul 04 2021 20:46:19 GMT+0200 (Восточная Европа, стандартное время)",
      createdTitle: "Jul 4, 2021",
      cathegory: "Task",
      content: "Starting at 15:00",
      archived: true
    }, {
      id: 7,
      taskName: "Answer to emails",
      created: "Sun Jul 04 2021 20:47:18 GMT+0200 (Восточная Европа, стандартное время)",
      createdTitle: "Jul 4, 2021",
      cathegory: "Task",
      content: "",
      archived: false
    }];
    this.monthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  }

  _createClass(Model, [{
    key: "addTask",
    value: function addTask(listOfTask, input, callback) {
      if (input.taskName.value.replace(' ', '') === '') {
        input.taskName.placeholder = 'Please, print the name of task';
        input.taskName.value = '';
        return false;
      } else {
        var newDate = new Date();
        var newCreatedTitle = "".concat(this.monthes[newDate.getMonth()], " ").concat(newDate.getDate(), ", ").concat(newDate.getFullYear());
        var listLength = listOfTask.length;
        var newId = 0;
        listLength !== 0 ? newId = listOfTask[listLength - 1].id + 1 : newId = 1;
        listOfTask.push({
          id: newId,
          taskName: "".concat(input.taskName.value),
          created: "".concat(newDate),
          createdTitle: "".concat(newCreatedTitle),
          cathegory: "".concat(input.taskCathegory.value),
          content: "".concat(input.taskContent.value),
          archived: false
        });
        callback();
      }

      return true;
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(data, event) {
      var tempId = parseInt(event.target.dataset.id);
      var currentEl = data.find(function (el) {
        return el.id === tempId;
      });
      data.splice(data.indexOf(currentEl), 1);
    }
  }, {
    key: "updateTask",
    value: function updateTask(listOfTask, input, callback, event) {
      input.taskName.placeholder = 'Name of task';
      var tempId = parseInt(event.target.dataset.id);
      var currentEl = listOfTask.find(function (el) {
        return el.id === tempId;
      });

      if (input.taskName.value.replace(' ', '') === '') {
        input.taskName.placeholder = 'Please, print the name of task';
        input.taskName.value = '';
        return false;
      } else {
        currentEl.taskName = "".concat(input.taskName.value);
        currentEl.cathegory = "".concat(input.taskCathegory.value);
        currentEl.content = "".concat(input.taskContent.value);
        callback();
      }

      return true;
    }
  }, {
    key: "calcStat",
    value: function calcStat(data, cathegoriesLinks) {
      var stat = Array.from(new Set(data.map(function (el) {
        return el.cathegory;
      }))).map(function (el) {
        return _defineProperty({}, el, {
          archived: 0,
          active: 0,
          img: cathegoriesLinks["default"]
        });
      });
      data.forEach(function (el) {
        stat.find(function (e) {
          var key = Object.keys(e)[0];

          if (key == el.cathegory) {
            el.archived ? e[key].archived++ : e[key].active++;
          }
        });
      });
      stat.forEach(function (el) {
        Object.keys(cathegoriesLinks).forEach(function (e) {
          var key = Object.keys(el)[0];

          if (key == e) {
            el[key].img = cathegoriesLinks[e];
          }
        });
      });
      return stat;
    }
  }, {
    key: "changeArchivedStatusOfTask",
    value: function changeArchivedStatusOfTask(data, event) {
      var tempId = parseInt(event.target.dataset.id);
      var currentEl = data.find(function (el) {
        return el.id === tempId;
      });
      currentEl.archived = !currentEl.archived;
    }
  }, {
    key: "changeArchivedStatus",
    value: function changeArchivedStatus(setIsArchived, event) {
      setIsArchived(event.target.value === 'true');
    }
  }]);

  return Model;
}();

exports["default"] = Model;