interface Question {
    id: string,
    name: string,
    description: string
}

export interface DataModel {
    folder: string,
    icon: string,
    question: Question[],
    title: string,
    url: string
}
  