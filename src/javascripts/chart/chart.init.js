
/**
 * @package     omeka
 * @subpackage  neatline-NeatLight
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Chart', function(Chart) {


  Neatline.vent.once('MAP:ingest', function(records) {
    Chart.__controller = new Neatline.Chart.Controller(records);
  });


});
