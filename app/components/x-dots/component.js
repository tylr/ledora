import Ember from 'ember';

const {
  computed,
} = Ember;

export default Ember.Component.extend({
  tagName: 'svg',
  classNames: ['dots'],
  attributeBindings: ['height'],

  rowCount: 2,
  radius: 12,
  padding: 5,

  diameter: computed('radius', function() {
    return this.get('radius') * 2;
  }),

  height: computed('patternWidth', function() {
    const {
      patternWidth, rowCount
    } = this.getProperties('patternWidth', 'rowCount');
    return patternWidth * rowCount;
  }),

  patternWidth: computed('radius', 'padding', function() {
    const {diameter, padding} = this.getProperties('diameter', 'padding');
    return diameter + padding;
  }),

  rows: computed('rowCount', 'radius', 'diameter', 'padding', function() {
    const {
      rowCount, radius, diameter, padding
    } = this.getProperties('rowCount', 'radius', 'diameter', 'padding');
    let [row, rows] = [0, []];
    for(row=0; row<rowCount; row++) {
      const cy = radius + (row * (padding + diameter));
      rows.push({cy});
    }
    return rows;
  })
});
