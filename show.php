

<?php echo head(array(
  'title' => nl_getExhibitField('title'),
  'bodyclass' => 'neatline show'
)); ?>

<!-- Exhibit. -->
<div class="exhibit">
  <?php echo nl_getExhibitMarkup(); ?>
  <div id="chart"></div>
</div>

<div id="neatline-narrative" class="narrative">

  <!-- Narrative -->
  <h1 class="title"><?php echo nl_getExhibitField('title'); ?></h1>
  <?php echo nl_getExhibitField('narrative'); ?>

</div>

<?php echo foot(); ?>
