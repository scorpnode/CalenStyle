/* ----------------------------------------------------------------------------- 

  CalenStyle - Responsive Event Calendar
  Version 2.0.3
  Copyright (c)2016 Curious Solutions LLP
  https://curioussolutions.in/libraries/calenstyle/content/license.htm
  See License Information in LICENSE file.

 ----------------------------------------------------------------------------- */

/*

	language: English
	file: CalenStyle-i18n-en

*/

(function ($) {
    $.CalenStyle.i18n["en"] = $.extend($.CalenStyle.i18n["en"], {
        veryShortDayNames: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		shortDayNames: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		fullDayNames: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		shortMonthNames: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		fullMonthNames: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		numbers: "0_1_2_3_4_5_6_7_8_9".split("_"),
		eventTooltipContent: "Default",
		formatDates: {},
		miscStrings: {
			today: "Today",
			week: "Week",
			allDay: "All Day",
			ends: "Ends"
		},
		duration: "Default",
		durationStrings: {
			y: ["year ", "years "],
			M: ["month ", "months "],
			w: ["w ", "w "],
			d: ["d ", "d "],
			h: ["h ", "h "],
			m: ["m ", "m "],
			s: ["s ", "s "]
		},
		viewDisplayNames: {
			DetailedMonthView: "Month",
			MonthView: "Month",
			WeekView: "Week",
			DayView: "Day",
			AgendaView: "Agenda"
		}
    });
})(jQuery);