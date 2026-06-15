import { TitleCasePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titlecase'
})

export class TitleCasPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        return value[0].toUpperCase() + value.substring(1);
    }
}