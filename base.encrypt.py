def encrypt(input_string):
    input_list = list(input_string)
    output_list = []

    for character in input_list:
        if character == 'a':
            output_list.append('z')
        elif character == 'b':
            output_list.append('y')
        elif character == 'c':
            output_list.append('x')
        elif character == 'd':
            output_list.append('w')
        elif character == 'e':
            output_list.append('v')
        elif character == 'f':
            output_list.append('u')
        elif character == 'g':
            output_list.append('t')
        elif character == 'h':
            output_list.append('s')
        elif character == 'i':
            output_list.append('r')
        elif character == 'j':
            output_list.append('q')
        elif character == 'k':
            output_list.append('p')
        elif character == 'l':
            output_list.append('o')
        elif character == 'm':
            output_list.append('n')
        elif character == 'n':
            output_list.append('m')
        elif character == 'o':
            output_list.append('l')
        elif character == 'p':
            output_list.append('k')
        elif character == 'q':
            output_list.append('j')
        elif character == 'r':
            output_list.append('i')
        elif character == 's':
            output_list.append('h')
        elif character == 't':
            output_list.append('g')
        elif character == 'u':
            output_list.append('f')
        elif character == 'v':
            output_list.append('e')
        elif character == 'w':
            output_list.append('d')
        elif character == 'x':
            output_list.append('c')
        elif character == 'y':
            output_list.append('b')
        elif character == 'z':
            output_list.append('a')
        else:
            output_list.append(character)

    output_string = str(''.join(output_list))

    print 'Here ya go:', output_string


OUTPUT = raw_input('What do you want to encrypt? ')

encrypt(OUTPUT)
