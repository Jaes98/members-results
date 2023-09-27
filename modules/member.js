function construct(member) {
    const MemberObject = {
      firstName: member.firstName,
      lastName: member.lastName,
      active_: member.isActiveMember,
      competitve: member.isCompetetive,
      birthday: new Date(member.dateOfBirth),
      email: member.email,
      gender: member.gender,
      image: member.image,
      hasPayed: member.hasPayed,
      id: member.id,
      get age() {
        return new Date().getFullYear() - this.birthday.getFullYear();
      },
      get active() {
        return this.active_ ? "Aktiv" : "Inaktiv";
      },
      get ageGroup() {
        if (this.age < 18) {
          return "Junior";
        } else return "Senior";
      },
      get name() {
        return `${this.firstName}  ${this.lastName}`;
      }
    };

    Object.defineProperties(MemberObject, {
      firstName: {
        enumerable: false,
      },
      lastName: {
        enumerable: false,
      },
      image: {
        enumerable: false,
      },
      id_: {
        writeable: false,
      },
    });
    return MemberObject;
}

export { construct };