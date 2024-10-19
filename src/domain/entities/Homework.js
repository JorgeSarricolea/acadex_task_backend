export class Homework {
  constructor({
    id,
    userId,
    categoryId,
    title,
    description,
    startDate,
    endDate,
  }) {
    this.id = id;
    this.userId = userId;
    this.categoryId = categoryId;
    this.title = title;
    this.description = description;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
  }
}
