<template>
  <div class="timeline_movie d-flex col-lg-8 col-md-9 col-sm-10 p-3 m-2">
    <div class="img">
      <img src="/img/play.svg" width="50" class="action_icon" />
    </div>
    <div class="ml-3 text-left relative">
      <div class="movie_title col-12 pl-0">Mocking Jay</div>
      <div class="movie_description col-12">
        After rescuing her family members jade was left to deal with the issues
        her father nairpobi has left her, Shao Khan her evil King tried
        manipulating her and the whole village it took few weeks to get out of
        the hold
      </div>
      <div class="d-flex justify-content-between absolute_bottom col-12">
        <div class="d-flex align-items-center ">
          <div>
            <img src="/img/like.svg" width="10" />
            <span class="percent_rated ml-2 font_sm">50% </span>
          </div>
          <div
            class="d-flex align-items-center white_text views pt-0 pb-0 pl-2 pr-2"
          >
            <i class="mdi mdi-eye"> </i>
            <span class=" ml-2">{{ views }} </span>
          </div>
        </div>
        <div><button class="trans_btn mdi mdi-dots-vertical"></button></div>
      </div>
    </div>
  </div>
</template>
