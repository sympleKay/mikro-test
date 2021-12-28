class PhoneBook {
    constructor() {
        this.contactList = []
        this.counter = 0
    }

    // The Add method creates a unique phone number contact in the phonebook.
    add(name, phonenumber, email) {
        if (!name || !phonenumber || !email) return new Error('Kindly provide all required information')
        if (this.counter === 0) {
            this.contactList[this.counter] = {
                id: Math.round(Math.random() * Date.now()),
                name,
                phonenumber,
                email,
                createdAt: new Date(Date.now())
            }
            this.counter += 1
            this.counter - 1
            return this.contactList
        }

        const search = this.contactList.find(contact => contact.phonenumber === phonenumber)

        if (!search) {
            this.contactList[this.counter] = {
                id: Math.round(Math.random() * Date.now()),
                name,
                phonenumber,
                email,
                createdAt: new Date(Date.now())
            }
            this.counter += 1
            this.counter - 1
            return this.contactList
        }

        return 'Phone number already exist!!!'

    }

    // The Fetch method get unique contact details in the phonebook using the phonenumber
    fetch(phonenumber) {
        if (this.counter === 0) return new Error('The stack is empty')
        const search = this.contactList.find(contact => contact.phonenumber === phonenumber)
        return search ? search : 'No record found'
    }

    // The fetchPhonenumber return all the phonenumber in the stack.
    fetchPhoneNumber() {
        if (this.counter === 0) return new Error('The stack is empty')
        return this.contactList.map(contact => contact.phonenumber)
    }




}

const phoneBook = new PhoneBook

console.log(phoneBook.add('Oluwakayode', '08131006516', 'oluwakayodefafiyebi95@gmail.com'))
console.log(phoneBook.add('Fafiyebi', '08131006517', 'fafiyebi96@gmail.com'))
console.log(phoneBook.add('Oluwakayode', '08131006516', 'oluwakayodefafiyebi95@gmail.com'))
console.log(phoneBook.fetch('08131006516'))
console.log(phoneBook.fetchPhoneNumber())
