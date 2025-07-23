import moment from "moment";

export function formatEventDate(date: string | null | undefined): string {
  if (!date) return "-";

  return moment(date).format("MMMM D, YYYY");
}

export function formatEventDateTime(date: string | null | undefined): string {
  if (!date) return "-";

  return moment(date).format("MMMM D, YYYY hh:mmA");
}

export function formatEventDateRange(
  dateFrom: string | null | undefined,
  dateTo: string | null | undefined
): string {
  if (!dateFrom && !dateTo) return "-";

  if (dateFrom && !dateTo) {
    return moment(dateFrom).format("MMMM D, YYYY");
  }

  if (!dateFrom && dateTo) {
    return moment(dateTo).format("MMMM D, YYYY");
  }

  const start = moment(dateFrom);
  const end = moment(dateTo);

  if (start.isSame(end, "day")) {
    return `${start.format("MMMM D, YYYY")} - ${end.format("hh:mmA")}`;
  } else {
    return `${start.format("MMMM D, YYYY")} - ${end.format("MMMM D, YYYY")}`;
  }
}

export function formatEventTimeRange(
  dateFrom: string | null | undefined,
  dateTo: string | null | undefined
): string {
  if (!dateFrom && !dateTo) return "-";

  if (dateFrom && !dateTo) {
    return moment(dateFrom).format("hh:mmA");
  }

  if (!dateFrom && dateTo) {
    return moment(dateTo).format("hh:mmA");
  }

  const start = moment(dateFrom);
  const end = moment(dateTo);

  return `${start.format("hh:mmA")} - ${end.format("hh:mmA")}`;
}

export function formatEventDateTimeRange(
  dateFrom: string | null | undefined,
  dateTo: string | null | undefined
): string {
  if (!dateFrom && !dateTo) return "-";

  if (dateFrom && !dateTo) {
    return moment(dateFrom).format("MMMM D, YYYY hh:mmA");
  }

  if (!dateFrom && dateTo) {
    return moment(dateTo).format("MMMM D, YYYY hh:mmA");
  }

  const start = moment(dateFrom);
  const end = moment(dateTo);

  if (start.isSame(end, "day")) {
    return `${start.format("MMMM D, YYYY hh:mmA")} - ${end.format("hh:mmA")}`;
  } else {
    return `${start.format("MMMM D, YYYY hh:mmA")} - ${end.format(
      "MMMM D, YYYY hh:mmA"
    )}`;
  }
}
