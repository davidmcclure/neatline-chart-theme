
/**
 * @package     omeka
 * @subpackage  neatline-NeatLight
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Chart', function(Chart) {


  Chart.Controller = Neatline.Shared.Controller.extend({


    slug: 'CHART',

    events: [{
      setFilter: 'setFilter'
    }],


    /**
     * Create the view.
     *
     * @param {Object} records
     */
    init: function(records) {
      this.view = new Neatline.Chart.View({
        slug: this.slug,
        records: records
      });
    },


    /**
     * Hide the focus.
     *
     * @param {Object} args
     */
    setFilter: function(args) {
      var view = Neatline.Simile.__controller.view;
      var date = view.band.getCenterVisibleDate();
      this.view.setDate(date);
    }


  });


});
