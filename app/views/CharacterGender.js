define([
  'underscore',
  'jquery',
  'backbone',
  'text!templates/gender.html'
], function(_, $, Backbone, GenderTpl) {

  var CharacterGenderView = Backbone.View.extend({

    tagName: 'li',

    className: 'media',

    template: _.template(GenderTpl),

    events: {
      'click #female': 'female',
      'click #male': 'male'
    },

    initialize: function(options) {
      this.options = options || {};
    },

    render: function () {
      var data = {
        model: this.model.toJSON(),
        position: this.options.position
      };

      this.$el.html(this.template(data));
      return this;
    },

    female: function() {
      var self = this;
      self.$el.remove();
      $.post('/api/gender', { characterId: this.model.get('characterId'), gender: 'female' }, function(data) {
        return false;
      });
    },

    male: function() {
      var self = this;
      self.$el.remove();
      $.post('/api/gender', { characterId: this.model.get('characterId'), gender: 'male' }, function(data) {
        return false;
      });
    }
  });

  return CharacterGenderView;
});
