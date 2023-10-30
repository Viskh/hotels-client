type Keys =
    | 'delete'
    | 'select'
    | 'choose'
    | 'removeSelection'
    | 'selectAll'
    | 'open'
    | 'close'
    | 'uploadDocument'
    | 'name'
    | 'cancel'
    | 'save'
    | 'apply'
    | 'clear'
    | 'change'
    | 'back'
    | 'phone'
    | 'email'
    | 'attachPhoto'
    | 'addDocument'
    | 'send'
    | 'required'
    | 'copy'
    | 'duplicate'
    | 'paste'
    | 'edit'
    | 'warning'
    | 'yes'
    | 'no'
    | 'createFolder'
    | 'link'
    | 'profile'
    | 'type'
    | 'date'
    | 'proceed'
    | 'information'
    | 'fio'
    | 'saveToFile'
    | 'add'
    | 'datePlaceholder'
    | 'resetFilter'
    | 'registrationAddress'
    | 'addRecord'
    | 'enterName'
    | 'author'
    | 'from'
    | 'tin'
    | 'to'
    | 'author'
    | 'notify'
    | 'answer'
    | 'selectRow'
    | 'approve'
    | 'reject';

type General = Record<Keys, string>;

export const ru: General = {
    delete: 'Удалить',
    select: 'Выделить',
    choose: 'Выбрать',
    open: 'Открыть',
    close: 'Закрыть',
    name: 'Наименование',
    cancel: 'Отменить',
    save: 'Сохранить',
    apply: 'Применить',
    clear: 'Очистить',
    change: 'Изменить',
    back: 'Назад',
    phone: 'Телефон',
    email: 'Электронная почта',
    send: 'Отправить',
    required: 'Обязательно',
    copy: 'Копировать',
    duplicate: 'Дублировать',
    paste: 'Вставить',
    edit: 'Редактировать',
    warning: 'Внимание',
    yes: 'Да',
    no: 'Нет',
    link: 'Связать',
    profile: 'Профиль',
    type: 'Тип',
    date: 'Дата',
    proceed: 'Перейти',
    information: 'Информация',
    fio: 'ФИО',
    add: 'Добавить',
    author: 'Автор',
    enterName: 'Введите наименование',
    removeSelection: 'Снять выделение',
    selectAll: 'Выделить все',
    uploadDocument: 'Загрузить документ',
    createFolder: 'Создать папку',
    saveToFile: 'Сохранить в файл',
    registrationAddress: 'Адрес прописки',
    datePlaceholder: 'дд.мм.гг',
    attachPhoto: 'Прикрепить фото',
    addDocument: 'Добавить документ',
    resetFilter: 'Сбросить фильтр',
    addRecord: 'Добавить запись',
    tin: 'ИНН',
    from: 'от',
    to: 'до',
    notify: 'Оповестить',
    answer: 'Ответить',
    selectRow: 'Выделите строку',
    approve: 'Согласовать',
    reject: 'Отклонить',
};

export const en: General = {
    delete: 'Delete',
    select: 'Select',
    choose: 'Select',
    open: 'Open',
    close: 'Close',
    name: 'Name',
    cancel: 'Cancel',
    save: 'Save',
    apply: 'Apply',
    clear: 'Clear',
    change: 'Change',
    back: 'Back',
    phone: 'Phone',
    email: 'E-mail',
    send: 'Send',
    required: 'Required',
    copy: 'Copy',
    duplicate: 'Duplicate',
    paste: 'Paste',
    edit: 'Edit',
    warning: 'Attention',
    yes: 'Yes',
    no: 'No',
    link: 'Link',
    profile: 'Profile',
    type: 'Type',
    date: 'Date',
    proceed: 'Proceed',
    information: 'Information',
    fio: 'Last name and initials',
    add: 'Add',
    author: 'Author',
    enterName: 'Enter name',
    removeSelection: 'Remove selection',
    selectAll: 'Select all',
    uploadDocument: 'Upload document',
    attachPhoto: 'Attach a photo',
    addDocument: 'Add document',
    createFolder: 'Create folder',
    saveToFile: 'Save to a file',
    registrationAddress: 'Registration address',
    datePlaceholder: 'DD/MM/YY',
    resetFilter: 'Reset filter',
    addRecord: 'Add a record',
    tin: 'TIN',
    from: 'from',
    to: 'to',
    notify: 'Notify',
    answer: 'Answer',
    selectRow: 'Select row',
    approve: 'Approve',
    reject: 'Reject',
};
